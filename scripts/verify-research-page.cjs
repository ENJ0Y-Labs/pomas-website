const puppeteer = require("puppeteer");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";
const externalRequests = new Set();
const fail = (message) => { throw new Error(message); };

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  try {
    const page = await browser.newPage();
    const runtimeErrors = [];
    const failedRequests = [];
    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") runtimeErrors.push(message.text()); });
    page.on("requestfailed", (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
    page.on("request", (request) => {
      const url = new URL(request.url());
      if (url.origin !== new URL(baseUrl).origin) externalRequests.add(url.origin);
    });

    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`${baseUrl}/research.html`, { waitUntil: "domcontentloaded" });
    try {
      await page.waitForSelector(".research-topic-grid", { timeout: 15000 });
    } catch (error) {
      const diagnostics = await page.evaluate(() => ({
        title: document.title,
        url: location.href,
        researchRoot: document.getElementById("research-root")?.innerHTML.slice(0, 1000) ?? "missing root",
        bodyText: document.body.innerText.slice(0, 500),
        scripts: [...document.scripts].map((script) => script.src || "inline")
      }));
      console.error(JSON.stringify({ diagnostics, runtimeErrors, failedRequests }, null, 2));
      throw error;
    }

    const layoutResults = [];
    for (const width of [1280, 800, 500]) {
      await page.setViewport({ width, height: 900 });
      await new Promise((resolve) => setTimeout(resolve, 100));
      const result = await page.evaluate(() => {
        const grid = document.querySelector(".research-topic-grid");
        const cards = [...document.querySelectorAll(".research-topic-card")];
        const columns = getComputedStyle(grid).gridTemplateColumns
          .split(" ")
          .map((value) => Number.parseFloat(value))
          .filter((value) => Number.isFinite(value));
        return {
          viewport: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          columns,
          cardWidths: cards.map((card) => Math.round(card.getBoundingClientRect().width * 100) / 100),
          overflowElements: [...document.querySelectorAll("body *")].map((element) => {
            const rect = element.getBoundingClientRect();
            return { tag: element.tagName, className: typeof element.className === "string" ? element.className : "", text: (element.innerText || "").slice(0, 90), left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width), scrollWidth: element.scrollWidth, clientWidth: element.clientWidth, overflowX: getComputedStyle(element).overflowX };
          }).filter((element) => element.right > window.innerWidth + 1 || element.left < -1 || element.scrollWidth > element.width + 1).sort((a, b) => Math.max(b.right - window.innerWidth, b.scrollWidth - b.width) - Math.max(a.right - window.innerWidth, a.scrollWidth - a.width)).slice(0, 20)
        };
      });

      if (result.documentWidth > width || result.bodyWidth > width) {
        fail(`Horizontal overflow at ${width}px: document=${result.documentWidth}, body=${result.bodyWidth}, elements=${JSON.stringify(result.overflowElements)}`);
      }
      if (!result.columns.length || result.columns.some((value) => value <= 0)) {
        fail(`Zero or missing grid tracks at ${width}px: ${JSON.stringify(result.columns)}`);
      }
      const expectedTracks = width >= 1024 ? 12 : width >= 640 ? 2 : 1;
      if (result.columns.length !== expectedTracks) {
        fail(`Expected ${expectedTracks} tracks at ${width}px, got ${result.columns.length}: ${JSON.stringify(result.columns)}`);
      }
      if (width >= 800 && result.cardWidths.some((value) => value < 240)) {
        fail(`A topic card is narrower than 240px at ${width}px: ${JSON.stringify(result.cardWidths)}`);
      }
      layoutResults.push(result);
    }

    await page.setViewport({ width: 1280, height: 900 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.evaluate(() => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); });
    const visibleFocusableCount = await page.evaluate(() =>
      [...document.querySelectorAll("a[href], button:not([disabled])")]
        .filter((element) => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden").length
    );
    const focused = new Set();
    for (let i = 0; i < 100; i += 1) {
      await page.keyboard.press("Tab");
      const state = await page.evaluate(() => {
        const element = document.activeElement;
        if (!(element instanceof HTMLElement) || !element.matches("a[href], button:not([disabled])")) return null;
        const style = getComputedStyle(element);
        return {
          key: [...document.querySelectorAll("a[href], button:not([disabled])")].indexOf(element),
          label: `${element.tagName}|${element.getAttribute("href") || element.getAttribute("aria-label") || element.textContent.trim()}`,
          focusVisible: element.matches(":focus-visible"),
          outlineStyle: style.outlineStyle,
          outlineWidth: style.outlineWidth,
          boxShadow: style.boxShadow
        };
      });
      if (!state) continue;
      if (focused.has(state.key)) break;
      focused.add(state.key);
      if (!state.focusVisible || ((state.outlineStyle === "none" || Number.parseFloat(state.outlineWidth) <= 0) && state.boxShadow === "none")) {
        fail(`Missing visible keyboard focus ring: ${state.key} (${JSON.stringify(state)})`);
      }
    }
    if (focused.size < visibleFocusableCount) {
      fail(`Keyboard traversal reached ${focused.size} of ${visibleFocusableCount} visible links/buttons`);
    }

    await page.setViewport({ width: 500, height: 900 });
    const menuButtonSelector = 'button[aria-controls="mobile-navigation"]';
    const menuButton = await page.$(menuButtonSelector);
    if (!menuButton) fail("Mobile menu button not found");
    await menuButton.click();
    await page.waitForFunction(() => document.querySelector('button[aria-controls="mobile-navigation"]').getAttribute("aria-expanded") === "true");
    const mobileLinks = await page.$eval("#mobile-navigation a[href]", (links) => links.length);
    if (mobileLinks !== 5) fail(`Expected five mobile navigation links, found ${mobileLinks}`);
    await page.keyboard.press("Escape");
    await page.waitForFunction(() => document.querySelector('button[aria-controls="mobile-navigation"]').getAttribute("aria-expanded") === "false");
    await menuButton.click();
    await page.click('#mobile-navigation a[href="#approach-vision"]');
    await page.waitForFunction(() => document.querySelector('button[aria-controls="mobile-navigation"]').getAttribute("aria-expanded") === "false");

    const pageChecks = await page.evaluate(() => ({
      themeColor: document.querySelector('meta[name="theme-color"]')?.content,
      currentNav: document.querySelector('nav a[aria-current="true"]')?.textContent.trim(),
      qHeadingCount: document.querySelectorAll("#approach-vision h3").length,
      oldHeadingCount: document.querySelectorAll("#approach-vision h4").length,
      dataPathCount: document.querySelectorAll("[data-path]").length
    }));
    if (pageChecks.themeColor !== "#f2fbff") fail(`Unexpected theme color: ${pageChecks.themeColor}`);
    if (!pageChecks.currentNav) fail("Active navigation link does not expose aria-current=true");
    if (pageChecks.qHeadingCount !== 5 || pageChecks.oldHeadingCount !== 0) fail(`Q1-Q5 heading order incorrect: ${JSON.stringify(pageChecks)}`);
    if (pageChecks.dataPathCount !== 0) fail("Legacy data-path attribute remains");

    await page.goto(`${baseUrl}/privacy.html`, { waitUntil: "domcontentloaded" });
    const privacyDraft = await page.$eval("body", (body) => body.innerText);
    if (!privacyDraft.includes("Draft - review before relying on it")) fail("Privacy draft warning missing from built output");

    const unexpectedExternal = [...externalRequests].filter((origin) =>
      !["https://fonts.googleapis.com", "https://fonts.gstatic.com"].includes(origin)
    );
    if (unexpectedExternal.length) fail(`Unexpected external requests: ${unexpectedExternal.join(", ")}`);

    console.log(JSON.stringify({
      status: "PASS",
      layoutResults,
      keyboardFocusableElements: focused.size,
      mobileNavigationLinks: mobileLinks,
      pageChecks,
      externalOrigins: [...externalRequests],
      builtPrivacyPage: "present"
    }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
