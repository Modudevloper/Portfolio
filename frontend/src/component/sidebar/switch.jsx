import React from "react";

const Switch = ({ checked, onChange }) => {
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
          className={`bg-yellow-600 rounded h-1 w-7 transition-all duration-500 ${
            checked ? "absolute w-full rotate-45" : "relative w-7"
          }`}
          id="bar1"
        />
        <div
          className={`bg-yellow-600 rounded h-1 w-full transition-all duration-500 ${
            checked ? "scale-x-0" : "scale-x-100"
          }`}
          id="bar2"
        />
        <div
          className={`bg-yellow-600 rounded h-1 w-7 transition-all duration-500 ${
            checked ? "absolute w-full -rotate-45" : "relative w-7"
          }`}
          id="bar3"
        />
      </label>
    </div>
  );
};

export default Switch;
