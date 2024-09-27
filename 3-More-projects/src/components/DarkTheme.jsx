import React, { useEffect, useState } from "react";
import "./css/themeSwitch.css";

function DarkTheme() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <div className="mainCont" data-theme={theme}>
        <h1>{theme === "light" ? "Light" : "Dark"} Mode</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
}

export default DarkTheme;
