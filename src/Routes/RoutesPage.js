import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import QuestionsPage from "../Pages/QuestionsPage";
import EndPage from "../Pages/EndPage";
const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions-page" element={<QuestionsPage />} />
        <Route path="/end-page" element={<EndPage />} />
        <Route path="*" element={<>page not found</>} />
      </Routes>
    </div>
  );
};

export default RoutesPage;
