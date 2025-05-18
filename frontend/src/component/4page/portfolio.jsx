import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import prj2 from '../4page/prj2.jpg'
import prj1 from '../4page/prj1.jpg'


const filters = ["All", "Print Design", "Web Design", "Photography"];

const images = [
  {
    src: prj2,
    category: "Web Design",
  },
  {
    src: prj1,
    category: "Web Design",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Photography 3",
    category: "Photography",
  },
  {
    src: "https://via.placeholder.com/300x200?text=Photography 4",
    category: "Photography",
  },
];

// Variants for filter buttons
const filterButtonVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

// Variants for images container (for stagger effect)
const imagesContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for each image
const imageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Photography");

  // Filtered images based on activeFilter
  const filteredImages = images.filter(
    (img) => activeFilter === "All" || img.category === activeFilter
  );

  return (
    <section className="min-h-screen flex bg-gray-100 text-black font-sans">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8 font-sans">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-4 h-0.5 bg-black"></span>
          <h2 className="text-4xl font-black tracking-wide">PORTFOLIO</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-yellow-400 text-white"
                  : "hover:bg-yellow-100"
              }`}
              onClick={() => setActiveFilter(filter)}
              variants={filterButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              layout
            >
              {filter.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Images Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={imagesContainerVariants}
          initial="initial"
          animate="animate"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.img
                key={img.src}
                src={img.src}
                alt={`Portfolio ${index}`}
                className="rounded-lg object-cover w-full h-64 shadow-md"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
