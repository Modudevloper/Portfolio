import React from "react";
import { useTheme } from "../themecontex/theme"; // import theme context

const Switch = ({ checked, onChange }) => {
  const { theme } = useTheme();

  // Use theme.accent color for bars instead of hardcoded yellow
  // fallback to yellow if accent missing
  const accentColor = theme.accent || "#F59E0B"; // Tailwind yellow-600 fallback

  return (
    <div className="relative w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-2 transition duration-500">
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor="checkbox"
        className={`relative w-full h-full flex flex-col items-center justify-center gap-2 ${
          checked ? "rotate-180" : ""
        } transition-transform duration-500`}
      >
        <div
          id="bar1"
          className={`rounded h-1 transition-all duration-500 ${
            checked ? "absolute w-full rotate-45" : "relative w-7"
          }`}
          style={{ backgroundColor: accentColor }}
        />
        <div
          id="bar2"
          className={`rounded h-1 transition-all duration-500 ${
            checked ? "scale-x-0" : "scale-x-100"
          } w-full`}
          style={{ backgroundColor: accentColor }}
        />
        <div
          id="bar3"
          className={`rounded h-1 transition-all duration-500 ${
            checked ? "absolute w-full -rotate-45" : "relative w-7"
          }`}
          style={{ backgroundColor: accentColor }}
        />
      </label>
    </div>
  );
};

export default Switch;
