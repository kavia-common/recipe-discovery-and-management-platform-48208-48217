//
// Ocean Professional Theme Constants (used for style & components)
//
export const Theme = {
  primary: "#2563EB",     // Blue
  secondary: "#F59E0B",   // Amber/Yellow
  background: "#f9fafb",
  surface: "#ffffff",
  success: "#F59E0B",
  error: "#EF4444",
  text: "#111827",
  border: "#e5e7eb",
  gradient: "linear-gradient(90deg, #2563EB14, #F59E0B07 100%)"
};

// Returns a css variable style-string for component style overrides
export function themeVars({dark = false}={}) {
  if (dark) {
    return {
      "--bg-primary": "#1a1a1a",
      "--bg-secondary": "#282c34",
      "--text-primary": "#ffffff",
      "--border-color": "#404040"
    };
  }
  return {
    "--bg-primary": Theme.background,
    "--bg-secondary": "#e8f0fa",
    "--text-primary": Theme.text,
    "--border-color": Theme.border
  };
}
