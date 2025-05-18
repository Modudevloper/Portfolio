import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://facebook.com/",
    bg: "bg-blue-600",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/modude_5?utm_source=qr&igsh=YWk3bHM1MzRxMjVy",
    bg: "bg-pink-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Modudevloper",
    bg: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "www.linkedin.com/in/modu-developer",
    bg: "bg-blue-700",
  },
];

// Variants
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
  return (
    <div className="flex min-h-screen font-sans bg-gradient-to-br from-yellow-100 to-white">
      <main className="w-full p-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SOCIAL MEDIA
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Connect with me on your favorite platforms! 💬
        </motion.p>

        <motion.p
          className="text-sm text-gray-500 max-w-xl mb-10"
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
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`p-5 rounded-full text-white text-3xl shadow-xl ${social.bg}`}
              >
                {social.icon}
              </div>
              <p className="text-sm text-gray-700 mt-2 font-medium">{social.name}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.h2
          className="text-md text-gray-700 font-semibold"
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
