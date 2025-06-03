// src/App.tsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage";
import AcademicPage from "./pages/AcademicPage";
import FinancialPage from "./pages/FinancialPage";
import CommunicationPage from "./pages/CommunicationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/Users" element={<UserPage />} />
        <Route path="/Academic" element={<AcademicPage />} />
        <Route path="/Financial" element={<FinancialPage />} />
        <Route path="/Communication" element={<CommunicationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
