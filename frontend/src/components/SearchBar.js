import React from "react";

// PUBLIC_INTERFACE
/**
 * Simple search bar (text input)
 */
export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      style={{ display: "flex", alignItems: "center", marginBottom: 14 }}
      onSubmit={e => { e.preventDefault(); onSubmit?.(); }}
      role="search"
    >
      <input
        style={{
          padding: "8px 16px",
          borderRadius: 10,
          fontSize: 15,
          border: "1px solid #e5e7eb",
          marginRight: 8,
          minWidth: 160
        }}
        placeholder="Search recipes…"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search recipes"
      />
      <button
        style={{
          border: "none",
          borderRadius: 10,
          background: "#2563EB",
          color: "#fff",
          fontWeight: 500,
          fontSize: 15,
          padding: "7px 18px",
          cursor: "pointer"
        }}
        type="submit"
      >Search</button>
    </form>
  );
}
