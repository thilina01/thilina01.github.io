import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectStatusMonitor from "./pages/ProjectStatusMonitor";
import ProjectFactoryPro from "./pages/ProjectFactoryPro";
import ProjectTextBridge from "./pages/ProjectTextBridge";
import ProjectWhizKidz from "./pages/ProjectWhizKidz";
import ProjectPrimeGen from "./pages/ProjectPrimeGen";
import ProjectOMSKPIMCPServer from "./pages/ProjectOMSKPIMCPServer";

import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/status-monitor" element={<ProjectStatusMonitor />} />
        <Route path="/factorypro" element={<ProjectFactoryPro />} />
        <Route path="/textbridge" element={<ProjectTextBridge />} />
        <Route path="/whizkidz-flashcards" element={<ProjectWhizKidz />} />
        <Route path="/prime-gen-vscode" element={<ProjectPrimeGen />} />
        <Route path="/oms-kpi-mcp-server" element={<ProjectOMSKPIMCPServer />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
