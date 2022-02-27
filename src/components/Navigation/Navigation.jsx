import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BiTimer } from "react-icons/bi";

const Navigation = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  return (
    <div className="navigation-wrapper">
      <div className="navi-home">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "navi-home-items" + (isActive ? " active" : "")
          }
        >
          <BiTimer />
          <span>P-T Home</span>
        </NavLink>
      </div>
      <div className="navi-right">
        <div className="settings">
          <NavLink
            to="settings"
            className={({ isActive }) =>
              "settings-items" + (isActive ? " active" : "")
            }
          >
            <AiFillSetting />
            <span>Settings</span>
          </NavLink>
        </div>
        <div className="dark-mode">
          {mode === "dark" ? (
            <div className="dark-toggle" onClick={() => onSelectMode("light")}>
              <MdLightMode />
              <span>Light mode</span>
            </div>
          ) : (
            <div className="dark-toggle" onClick={() => onSelectMode("dark")}>
              <MdDarkMode />
              <span>Dark mode</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
