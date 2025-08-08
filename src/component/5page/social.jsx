import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../themecontex/theme";  // Import your theme context
import Button from "./button";

// const socials = [
//   {
//     name: "Facebook",
//     icon: <FaFacebook />,
//     link: "https://facebook.com/",
//     bg: "bg-blue-600",
//     color: "#3b82f6", // Tailwind blue-500 hex for accent fallback
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     link: "https://www.instagram.com/modude_5?utm_source=qr&igsh=YWk3bHM1MzRxMjVy",
//     bg: "bg-pink-500",
//     color: "#ec4899", // Tailwind pink-500
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     link: "https://github.com/Modudevloper",
//     bg: "bg-gray-800",
//     color: "#374151", // Tailwind gray-700
//   },
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     link: "https://www.linkedin.com/in/modu-developer", // added https://
//     bg: "bg-blue-700",
//     color: "#1d4ed8", // Tailwind blue-700
//   },
// ];

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export default function SocialMedia() {
  const { theme } = useTheme();

  return (
    <div className={`flex min-h-screen font-sans ${theme.background} ${theme.text} transition-colors duration-500`}>
      <main className="w-full p-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          style={{ color: theme.accent }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SOCIAL MEDIA
        </motion.h1>

        <motion.p
          className="text-lg mb-2"
          style={{ color: theme.text.replace("text-", "") === "white" ? "rgba(255,255,255,0.85)" : "#444" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Connect with me on your favorite platforms! 💬
        </motion.p>

        <motion.p
          className="text-sm max-w-xl mb-10"
          style={{ color: theme.text.replace("text-", "") === "white" ? "rgba(255,255,255,0.65)" : "#666" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Whether it’s code, memes or motivation — I’m just one click away 😉
        </motion.p>

        {/* Social Media Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-span-2 sm:col-span-4 flex justify-center">
            <Button />
          </div>
        </motion.div>


        <motion.h2
          className="text-md font-semibold mt-20"
          style={{ color: theme.text.replace("text-", "") === "white" ? "rgba(255,255,255,0.85)" : "#444" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Catch you there! 😄
        </motion.h2>
      </main>
    </div>
  );
}
