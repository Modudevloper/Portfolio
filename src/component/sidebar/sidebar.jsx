import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCamera,
  FaDesktop,
  FaPaperPlane,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import modude from "../sidebar/modude.jpeg";
import Switch from "./switch";
import { useTheme } from "../themecontex/theme";

function Sidebar() {
  const { theme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarIcons = [
    { icon: <FaHome />, label: "HOME", path: "/" },
    { icon: <FaUser />, label: "ABOUT ME", path: "/about" },
    { icon: <FaBriefcase />, label: "RESUME", path: "/resume" },
    { icon: <FaCamera />, label: "PROJECT", path: "/portfolio" },
    { icon: <FaDesktop />, label: "SOCIAL MEDIA", path: "/social" },
    { icon: <FaPaperPlane />, label: "CONTACT", path: "/contact" },
  ];

  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, 100]);

  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, x: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <div className="fixed top-8 right-10 z-50 sm:hidden">
        <Switch checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
      </div>

    <motion.aside
  className={`fixed sm:relative text-white top-0 left-0 h-screen
    py-8 px-4 flex flex-col items-center shadow-lg w-64 sm:w-64 z-[999]
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
    backdrop-blur-md
    ${theme.background}   // <-- add theme bg and text here
  `}
  style={{
    y: translateY,
    // remove background or backgroundColor here!
  }}
  variants={sidebarVariants}
  initial="hidden"
  animate="visible"
  onClick={() => {
    if (window.innerWidth < 640) setIsOpen(false);
  }}
>

        <motion.div
          className="w-28 h-28 rounded-full overflow-hidden border-4 mb-6 shadow-md"
          style={{ borderColor: theme.buttonBg }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={modude} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>

        <nav className="space-y-4 text-lg font-semibold w-full">
          {sidebarIcons.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div key={i} variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link
                  to={item.path}
                  style={{
                    backgroundColor: isActive ? "#fff" : "transparent",
                    color: isActive ? theme.buttonBg : theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                    boxShadow: isActive ? `0 4px 15px ${theme.shadow}` : "none",
                    borderRadius: "9999px",
                    padding: "0.5rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.backgroundColor = "#fff";
                    if (!isActive) e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = theme.text;
                    }
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}

export default Sidebar;
