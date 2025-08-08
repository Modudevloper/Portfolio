// components/FloatingContactIcon.jsx
import React from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./themecontex/theme";  // import theme hook

export default function FloatingContactIcon() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300"
      onClick={handleClick}
      title="Contact Me"
      style={{
        backgroundColor: theme.buttonBg,
        color: theme.buttonText === "text-white" ? "#fff" : "#000",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = lightenColor(theme.buttonBg, 20);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.buttonBg;
      }}
    >
      <MessageCircle className="w-8 h-8" />
    </div>
  );
}

// Utility function to lighten hex color (optional)
function lightenColor(color, percent) {
  // assuming color is in hex format #RRGGBB
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) + percent;
  const g = ((num >> 8) & 0x00ff) + percent;
  const b = (num & 0x0000ff) + percent;
  const newR = Math.min(255, r);
  const newG = Math.min(255, g);
  const newB = Math.min(255, b);
  return `rgb(${newR}, ${newG}, ${newB})`;
}
