// components/FloatingContactIcon.jsx
import React from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingContactIcon() {
    const navigate=useNavigate()
 function Handalclick() {
    navigate('/contact')
 }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
      onClick={Handalclick}
      title="Contact Me"
    >
      <MessageCircle className="w-6 h-6" />
    </div>
  );
}
