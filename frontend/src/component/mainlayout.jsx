import React from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import FloatingContactIcon from "./contactfloat"; // adjust path as needed

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto relative">
        <Outlet />
        <FloatingContactIcon /> {/* 👈 Always visible, even if route changes */}
      </div>
    </div>
  );
};

export default MainLayout;
