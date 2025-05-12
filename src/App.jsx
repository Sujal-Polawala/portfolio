import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/projectPage.jsx"; // Import ProjectsPage
import Home from "./pages/home.jsx";
import CustomCursor from "./custom/customCursor.jsx";
import 'react-tooltip/dist/react-tooltip.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <CustomCursor />
    </Router>
  );
}

export default App;
