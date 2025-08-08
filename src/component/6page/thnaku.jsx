import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="min-h-screen rounded-xl flex items-center justify-center bg-purple-800 px-4">
      <motion.div
        className="bg-white p-10  rounded-2xl shadow-xl max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-4 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <FaCheckCircle className="text-purple-600 text-6xl" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold  text-purple-800 mb-2">
          Thank You! 
        </h1>
        <p className="text-gray-600 mb-6">
          Your message has been successfully sent.  
          I’ll get back to you as soon as possible.
        </p>

        {/* Button */}
        <Link to="/">
          <motion.button
            className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium shadow-md hover:bg-purple-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}