import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import ProjectPage from "../pages/ProjectPage";
import { Home } from "../pages/Home";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
