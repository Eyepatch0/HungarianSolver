import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const darkModeToggleRef = useRef(document.querySelector("html"));

  const toggleDarkMode: () => void = () => {
    darkModeToggleRef.current?.classList.toggle("dark");
    setIsDark(!isDark);
    // if (isDark) {
    //   document.querySelector("html")?.classList.remove("dark");
    // }
    // if (!isDark) {
    //   document.querySelector("html")?.classList.add("dark");
    // }
  };

  const toggleVisibility: () => void = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Navbar
        isDark={isDark}
        isVisible={isVisible}
        toggleDarkMode={toggleDarkMode}
        toggleVisibility={toggleVisibility}
      />
      <Outlet />
    </>
  );
}

export default App;
