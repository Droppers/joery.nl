import classNames from "classnames";
import React, { useState } from "react";

const isDark = () => {
  const { dataset } = document.getElementsByTagName("html")[0];
  if ("theme" in dataset) {
    return dataset.theme === "dark";
  }

  const browserDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return browserDark;
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(isDark());

  const click = () => {
    const theme = !dark ? "dark" : "light";
    document.getElementsByTagName("html")[0].dataset.theme = theme;
    if (window.localStorage) {
      window.localStorage.setItem("theme", theme);
    }
    setDark(!dark);
  };
  return (
    <div
      id="btn"
      className={classNames("theme-toggle", dark && "dark-active")}
      role="button"
      tabIndex={0}
      onClick={click}
    >
      <div className="toggle-ray" />
      <div className="toggle-middle" />
    </div>
  );
};

export default ThemeToggle;
