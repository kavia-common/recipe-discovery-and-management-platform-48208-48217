import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BrowsePage from "./pages/Browse";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { themeVars } from "./theme";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  // Set CSS vars for theme
  useEffect(() => {
    Object.entries(themeVars({dark: theme === "dark"})).forEach(([k, v]) =>
      document.documentElement.style.setProperty(k, v)
    );
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="App" style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <div style={{ maxWidth: 1220, margin: "32px auto", padding: "0 16px" }}>
          <Routes>
            <Route path="/" element={<BrowsePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
