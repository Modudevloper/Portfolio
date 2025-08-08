import React from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import FloatingContactIcon from "./contactfloat"; // adjust path as needed
import ThemeToggle from "./themebutton/themebutton"; // ✅ path check karna
import { useTheme } from "./themecontex/theme";  // import useTheme here

const MainLayout = () => {
  const { theme } = useTheme(); // get current theme

  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <Sidebar />

      {/* Right main content area */}
      <div className={`flex-1 p-4 overflow-y-auto relative ${theme.background} ${theme.text}`}>
        {/* Theme Toggle button — top right corner */}
        <ThemeToggle />

        {/* Page content */}
        <Outlet />

        {/* Floating contact button */}
        <FloatingContactIcon />
      </div>
    </div>
  );
};

export default MainLayout;
