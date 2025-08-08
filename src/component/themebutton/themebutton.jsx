import React from "react";
import { useTheme } from "../themecontex/theme";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <motion.button
      onClick={handleThemeChange}
      className="fixed top-5 right-5 z-50 p-3 rounded-full shadow-md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: theme.buttonBg, // inline style for background hex color
        color: theme.buttonText === "text-white" ? "#fff" : "#000", // map text class to color
      }}
    >
      {theme.name.toLowerCase().includes("dark") ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </motion.button>
  );
}
