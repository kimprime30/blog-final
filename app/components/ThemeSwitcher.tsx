"use client";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <button onClick={toggleTheme}>
      Alternar para {theme === "light" ? "escuro" : "claro"}
    </button>
  );
};

export default ThemeSwitcher;
