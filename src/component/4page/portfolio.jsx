import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../themecontex/theme";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

// Example images (replace or extend with your own URLs)
import prj1 from "../4page/prj1.jpg";
import prj2 from "../4page/prj2.jpg";

const filters = ["All", "Print Design", "Web Design", "Photography"];

const imagesData = [
  {
    category: "Web Design",
    imagesSet: [
      prj2,
     "https://imgs.search.brave.com/n430bErtyXgu5mtR_tyz1Cb5c6dSEqFiFPDqNRTezRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NmU4ODc0NjgzNGI4/MDUwN2NkZjc5MzMv/NjZlYzgzZDg0MDhh/M2JjNTk1YzcwYzk4/X3d3dy5veXN0ZXJo/ci5jb21fJTIwKDEp/JTIwMS5hdmlm",
      "https://imgs.search.brave.com/Tjyxn5FZGzLAe48zlm2-dxa6mRQ3xbryhJjZP_cxmqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvcnl3ZWJzLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzExL3Vk/ZW15LnBuZw",
    ],
    github: "https://github.com/yourrepo1",
    netlify: "https://yournetlify1.netlify.app",
  },
  {
    category: "Photography",
    imagesSet: [
      "https://imgs.search.brave.com/G7ok6FhWO3mwJzh0jRBLbB2eu_sMj4UBNXD9q7YPUfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvcnl3ZWJzLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzExL3Nr/aWxsc2hhcmUucG5n",
      "https://imgs.search.brave.com/D-rN4IGUzicwDKNU0xsxnbSLLD_RKC11CylejSUCLZ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvYXNzZXRz/L2h1YnNwb3QuY29t/L3dlYi10ZWFtL1dC/Wi9GZWF0dXJlJTIw/UGFnZXMvd2Vic2l0/ZS1kcmFnLWFuZC1k/cm9wL2N1c3RvbS13/ZWJzaXRlLWVuLndl/YnA",
      "https://imgs.search.brave.com/lw6uTuoanK2i0HJzaosey9AcyCD4ZXFc631-3BLw_DI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvcnl3ZWJzLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI0LzExL3Vw/d29yay5wbmc",
    ],
     github: "https://github.com/yourrepo1",
    netlify: "https://yournetlify1.netlify.app",
  },
  {
    category: "Print Design",
    imagesSet: [
      "https://imgs.search.brave.com/xd-Va8vCy7zjzDuS4btQYKpkPEVGwECdOb9NZN14Xqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWJs/aXVtLmNvbS9ibG9n/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAxLzItMi04MDB4/NDgxLnBuZw",
      "https://imgs.search.brave.com/RxSwdjzS6d450iN70gQCb8DdWkmkt8hPR2SvCKphEw0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NmU4ODc0NjgzNGI4/MDUwN2NkZjc5MzMv/NjZlYzgzZDhiODEx/NzQ4NmQ3NWZkMTA2/X3d3dy5qYXNwZXIu/YWlfJTIwMS5hdmlm",
      "https://imgs.search.brave.com/lL3jI5bz1OVcpLgMORtAFo3d-1to4fGT-y01PxFQ2aM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MDA5ZWM4Y2RhN2Yz/MDU2NDVjOWQ5MWIv/NjgxYTk1MTg0ODEw/YTcyNWVjNGFjNGYx/XzY2MzU3YjMxZjlk/NmVhMmMzMjE2NDYw/M19ZbmtxZnlTLTdB/VllncHR1b3B0MnJq/NDNxelVLclcwbUE0/MERhZ0IyVDJ6TGxr/bGQwaDY5NGZBU1pR/d1F2c043a01OZjNx/b2hoekZvZFN1bEpG/MHpXZ1VOSXl6TFF4/NENreW5BVWFNLWl6/US1HdWlYdUpIQkxo/TDZDbEpNcjF2NXpy/alNZN2o4ZlNLNGRI/dml4UkFlTmZFLnBu/Zw",
    ],
   github: "https://github.com/yourrepo1",
    netlify: "https://yournetlify1.netlify.app",
  },
];

const filterButtonVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const imagesContainerVariants = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const imageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

// PortfolioCard component for cycling images + hover overlay
const PortfolioCard = ({ imagesSet, github, netlify, onClick }) => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imagesSet.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagesSet.length]);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      layout
      variants={imageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <img
        src={imagesSet[current]}
        alt="Portfolio slide"
        className={`object-cover w-full h-64 transition-all duration-500 ease-in-out ${
          hovered ? "filter blur-sm" : ""
        }`}
      />

      {/* Overlay with icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0  bg-opacity-50 flex items-center justify-center gap-6 pointer-events-none"
      >
        {github && github !== "#" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-gray-300 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            aria-label="GitHub Link"
          >
            <FaGithub />
          </a>
        )}
        {netlify && netlify !== "#" && (
          <a
            href={netlify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-gray-300 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            aria-label="Netlify Link"
          >
            <SiNetlify />
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("Photography");
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = imagesData.filter(
    (img) => activeFilter === "All" || img.category === activeFilter
  );

  const openSlider = (index) => {
    setCurrentIndex(index);
    setSliderOpen(true);
  };

  const closeSlider = () => setSliderOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className={`min-h-screen flex ${theme.background} ${theme.text} font-sans`}
    >
      <div className="flex-1 p-8 font-sans">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <span
            className={`w-4 h-0.5`}
            style={{ backgroundColor: theme.accent || "inherit" }}
          ></span>
          <h2 className="text-4xl font-black tracking-wide">PORTFOLIO</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "text-white"
                  : "hover:text-black hover:bg-opacity-20"
              }`}
              onClick={() => setActiveFilter(filter)}
              variants={filterButtonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              layout
              style={{
                backgroundColor:
                  activeFilter === filter ? theme.accent : undefined,
                color: activeFilter === filter ? "white" : undefined,
              }}
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
            {filteredImages.map((imgSet, index) => (
              <PortfolioCard
                key={index}
                imagesSet={imgSet.imagesSet}
                github={imgSet.github}
                netlify={imgSet.netlify}
                onClick={() => openSlider(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slider Modal */}
      <AnimatePresence>
        {sliderOpen && (
          <motion.div
            className="fixed inset-0  bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSlider}
          >
            <motion.div
              className="relative max-w-4xl max-h-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentIndex].imagesSet[0]}
                alt={`Slide ${currentIndex}`}
                className="rounded-lg max-w-full max-h-[80vh] object-contain"
              />

              {/* Left arrow */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl px-4 py-2 focus:outline-none"
                aria-label="Previous Image"
              >
                ‹
              </button>

              {/* Right arrow */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl px-4 py-2 focus:outline-none"
                aria-label="Next Image"
              >
                ›
              </button>

              {/* Close button */}
              <button
                onClick={closeSlider}
                className="absolute top-2 right-2 text-white text-3xl px-3 py-1 focus:outline-none"
                aria-label="Close Slider"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
