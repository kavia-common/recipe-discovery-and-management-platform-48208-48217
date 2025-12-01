import React from "react";
import { Link } from "react-router-dom";

import { Theme } from "../theme";

// PUBLIC_INTERFACE
/**
 * App Header with navigation links and theme toggle
 */
export default function Header({ theme, onToggleTheme }) {
  return (
    <header style={{
      background: Theme.primary,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem", minHeight: 64,
      boxShadow: "0 1px 6px rgba(37,99,235,0.06)",
      zIndex: 10
    }}>
      <div style={{ flex: 1 }}>
        <Link to="/" style={{ color: "#fff", fontWeight: "bold", fontSize: 22, textDecoration: "none", letterSpacing: 1 }}>
          🍲 Recipe Discovery
        </Link>
      </div>
      <nav>
        <Link
          to="/"
          style={{
            color: "#fff",
            marginRight: 32,
            padding: 6,
            fontWeight: 500,
            textDecoration: "none",
            borderRadius: 8,
            transition: "background .15s",
            background: "transparent"
          }}
        >
          Home
        </Link>
      </nav>
      <button
        style={{
          background: Theme.secondary,
          color: Theme.text,
          border: "none",
          borderRadius: 8,
          padding: "8px 18px",
          fontWeight: 600,
          fontSize: 14,
          boxShadow: "0 2px 4px 0 rgb(37,99,235,0.07)",
          marginLeft: 10,
          cursor: "pointer"
        }}
        onClick={onToggleTheme}
        aria-label="Toggle theme"
      >{theme === "light" ? <>🌙 Dark</> : <>☀️ Light</>}</button>
    </header>
  );
}
