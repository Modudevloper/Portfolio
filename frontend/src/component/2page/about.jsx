import React from "react";
import { motion } from "framer-motion";
import { FaPrint, FaGlobe, FaCamera } from "react-icons/fa";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const funFactVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans">
      <motion.main
        className="flex-1 p-6 md:p-16 bg-gray-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          variants={itemVariants}
        >
          ABOUT ME
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-700 mb-4"
          variants={itemVariants}
        >
          I'm <span className="font-bold text-gray-900">Sarita Smith</span>, Graphic Designer / Photographer
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-gray-600 mb-10 max-w-full md:max-w-2xl"
          variants={itemVariants}
        >
          Versione errores errorum fuga. Et pauper novit nonsequi sectae ex vera verbum aut! Quis et nos eum equae penie nonet, spatiore commi volorem quidus iustibus etc utis. Quis sam explabor quate vendam litigna idunt que facill upta dolo. Qui as es es, ut es vellaborror sam volupid, optiam spratati doluptaes quam eatur, orebeari ortur? Untronis eicia in con rem faccae resci veliorestiam tur adi.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What I Do Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-yellow-500 mb-4">What I Do?</h2>
            <div className="space-y-6">
              {[
                { icon: <FaPrint />, title: "PRINT DESIGN", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, velit." },
                { icon: <FaGlobe />, title: "WEB DESIGN", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, velit." },
                { icon: <FaCamera />, title: "PHOTOGRAPHY", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, velit." },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-yellow-500 p-3 rounded-full text-white text-xl">{icon}</div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-yellow-500 mb-4">Fun Facts</h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-center">
              {[
                { value: "10+", label: "YEARS\nEXPERIENCE" },
                { value: "450", label: "PROJECTS\nDONE" },
                { value: "65", label: "WON\nAWARDS" },
                { value: "300+", label: "HAPPY\nCLIENTS" },
                { value: "650K", label: "SATISFIED\nFOLLOWERS" },
                { value: "+10", label: "NEW WORKS\nEACH MONTH" },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  className="bg-black text-white w-20 h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center rounded-full text-center px-2 cursor-default"
                  variants={funFactVariants}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#facc15",
                    color: "#000",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-lg sm:text-xl font-bold">{fact.value}</div>
                  <div className="text-[9px] sm:text-[10px] whitespace-pre-line">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
