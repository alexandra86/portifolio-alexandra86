import React from "react";
import { Route, Routes } from "react-router-dom";
import { CurriculumPage } from "./pages/CurriculumPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
