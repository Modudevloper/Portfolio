// src/components/ProfilePage.jsx
import React, { useState } from "react";
import ArcSidebar from "../sidebar/svgsidebar";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "../particlesbg";
import modude from "../sidebar/modude.jpeg";
import { useTheme } from "../themecontex/theme"; // Global theme context
import ThemeToggle from "../themebutton/themebutton";

const DecorativeSVGs = ({ accent }) => {
  const colors = [accent, "rgba(255,255,255,0.12)", "rgba(255,255,255,0.06)", accent];
  const size = [20, 30, 40, 50];
  const positions = Array.from({ length: 12 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: Math.random() * 360,
    delay: Math.random() * 4,
  }));

  return (
    <>
      {positions.map((pos, i) => (
        <motion.svg
          key={i}
          className="absolute z-0 pointer-events-none"
          width={size[i % size.length]}
          height={size[i % size.length]}
          viewBox="0 0 24 24"
          fill={colors[i % colors.length]}
          style={{ top: pos.top, left: pos.left, opacity: 0.35 }}
          animate={{
            y: [0, -10, 10, 0],
            rotate: [pos.rotate, pos.rotate + 360],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
        >
          <path d="M12 2L15 8H21L16.5 12L18 18L12 14.5L6 18L7.5 12L3 8H9L12 2Z" />
        </motion.svg>
      ))}
    </>
  );
};

export default function ProfilePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tiltStyle, setTiltStyle] = useState({});
  const navigate = useNavigate();

  // Theme context values
  const { themeIndex, theme, handleThemeChange } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="content"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold tracking-wide"
              variants={itemVariants}
              style={{
                color: theme.accent,
                textShadow: `0 0 12px ${theme.accent}55`,
              }}
            >
              HEY THERE!
            </motion.h2>

            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold mt-4 leading-tight"
              variants={itemVariants}
            >
              <span className={theme.text}>I'M </span>
              <span style={{ color: theme.accent }}>MODUDE</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl mt-6 max-w-xl font-medium"
              variants={itemVariants}
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              A creative mind with a love for clean UI, smooth UX, and interactive frontend magic.
              Let’s make something amazing together.
            </motion.p>

            <motion.div className="mt-6 space-y-3" variants={itemVariants}>
              <motion.div
                className={`inline-block font-semibold px-4 py-2 rounded-full shadow-md ${theme.buttonBg} ${theme.buttonText}`}
                whileHover={{ scale: 1.05 }}
              >
                FRONTEND DEVELOPER ⚡ UI/UX ENTHUSIAST
              </motion.div>

              <motion.div
                className="inline-block text-white font-semibold px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                READY TO DESIGN YOUR NEXT EXPERIENCE ✨
              </motion.div>
            </motion.div>

            <motion.button
              className={`mt-8 px-6 py-3 ${theme.buttonBg} ${theme.buttonText} font-semibold rounded-full shadow-md hover:brightness-110 transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
            >
              MORE ABOUT ME
            </motion.button>
          </motion.div>
        );

      default:
        const paths = ["/about", "/resume", "/portfolio", "/social", "/contact"];
        navigate(paths[activeIndex - 1]);
        return null;
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);
    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const resetTilt = () => setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg)" });

  return (
    <div
      className={`w-screen min-h-screen ${theme.background} ${theme.text} relative overflow-x-hidden transition-all duration-500`}
    >
      {/* Theme toggle button */}
      <button
      >
        <ThemeToggle/>
      </button>

      {/* Background Effects */}
      <ParticleBackground />
      <DecorativeSVGs accent={theme.accent} />

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row max-w-[1200px] w-full items-center justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1 max-w-full md:max-w-[550px] mb-8 md:mb-0 px-4 sm:px-0">
            <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
          </div>

          {/* Right Section */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
            <motion.div
              className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden z-10 border-4"
              style={{
                ...tiltStyle,
                borderColor: theme.accent,
                boxShadow: `0 10px 30px ${theme.accent}33`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              >
              <img
                src={modude}
                alt="Modude"
                className="w-full h-full object-cover object-down rounded-full"
              />
            </motion.div>

            <ArcSidebar
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              themeIndex={themeIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

