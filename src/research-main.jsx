import React from "react";
import { createRoot } from "react-dom/client";
import ResearchPage from "./ResearchPage.jsx";
import "./research.css";

createRoot(document.getElementById("research-root")).render(
  <React.StrictMode>
    <ResearchPage />
  </React.StrictMode>
);
