import { useEffect, useState } from "react";

function ThemeToggle() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {

    if (dark) {

      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");

    } else {

      document.body.classList.remove("dark");

      localStorage.setItem("theme", "light");

    }

  }, [dark]);

  return (

    // <button
    //   className="theme-btn"
    //   onClick={() => setDark(!dark)}
    // >
    //   {dark ? "☀️" : "🌙"}
    // </button>
    <></>

  );

}

export default ThemeToggle;