// src/components/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { useTheme } from "../themecontex/theme"; // theme context hook

export default function AboutMe() {
  const { theme } = useTheme(); // get theme from context

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };
   
  const getCircleBackground = (theme) => {
    // Agar background light hai toh dark circle, agar dark hai toh light circle
    const bgIsLight =
      theme.background.toLowerCase().includes("white") ||
      theme.background === "#fff";
    return bgIsLight ? theme.text : "#222"; // dark shade for dark background
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const funFactVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row font-sans transition-all duration-500
        ${theme.background} ${theme.text} relative overflow-x-hidden`}
    >
     
      <motion.main
        className="flex-1 p-6 md:p-16 transition-colors duration-500 rounded-lg"
        style={{
          backgroundColor: theme.backgroundSecondary || "rgba(255, 255, 255, 0.05)",
          boxShadow: `0 10px 30px ${theme.accent}33`,
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: theme.accent }}
          variants={itemVariants}
        >
          ABOUT ME
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-4"
          style={{ color: theme.textSecondary || "rgba(255, 255, 255, 0.85)" }}
          variants={itemVariants}
        >
          I'm <span className="font-bold">Modude</span>, a passionate{" "}
          <span className="font-semibold" style={{ color: theme.accent }}>
            Frontend Developer
          </span>{" "}
          with hands-on experience in building responsive, beautiful UIs using HTML, CSS, JavaScript, and React.js.
        </motion.p>

        <motion.p
          className="text-sm md:text-base mb-10 max-w-full md:max-w-2xl"
          style={{ color: theme.textSecondary || "rgba(255, 255, 255, 0.7)" }}
          variants={itemVariants}
        >
          I'm currently in my 2nd year of BCA from YMCA University (non-attending) and have completed a 6-month MERN Stack course from Ontick CDC Technology. During my internship at Adhana Innovation, I contributed to real-world projects, improved code quality, and collaborated in a team setup.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What I Do Section */}
          <motion.div variants={itemVariants}>
            <h2
              className="text-lg font-bold mb-4"
              style={{ color: theme.accent }}
            >
              What I Do?
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FaLaptopCode />,
                  title: "Frontend Development",
                  desc: "Building responsive UIs with React.js, HTML5, Tailwind CSS, and clean component-based architecture.",
                },
                {
                  icon: <FaCode />,
                  title: "MERN Stack Projects",
                  desc: "Worked on full stack projects during course training, handling both frontend and backend development.",
                },
                {
                  icon: <FaProjectDiagram />,
                  title: "Live Project Contribution",
                  desc: "Built and maintained pages in real-time projects during internship at Adhana Innovation.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="p-3 rounded-full text-xl text-white"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: theme.text }}>
                      {title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: theme.textSecondary || "rgba(255, 255, 255, 0.7)" }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Section */} 
          <motion.div variants={itemVariants}>
            <h2
              className="text-lg font-bold mb-4"
              style={{ color: theme.accent }}
            >
              Fun Facts
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-center">
              {[
                { value: "6M", label: "MERN COURSE\nCOMPLETED" },
                { value: "5+", label: "PROJECTS\nDELIVERED" },
                { value: "1", label: "INTERNSHIP\nEXPERIENCE" },
                { value: "70%", label: "HBSE CLASS 12\nSCORE" },
                { value: "2ND", label: "YEAR BCA\nRUNNING" },
                { value: "∞", label: "LOVE FOR\nLEARNING" },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full cursor-default flex flex-col justify-center items-center text-center px-3 select-none"
                 style={{ boxShadow: theme.shadow }}
                  variants={funFactVariants}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: theme.accent,
                    color: theme.text,
                    boxShadow: `0 0 25px 6px ${theme.accent}ff`,
                    border: `2px solid ${theme.accent}ff`,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-lg sm:text-xl font-bold">{fact.value}</div>
                  <div className="text-[9px] sm:text-[10px] whitespace-pre-line">
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
