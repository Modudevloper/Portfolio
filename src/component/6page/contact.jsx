import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../themecontex/theme";  // import theme context

export default function Contact() {
  const contactRef = useRef();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const scrollToForm = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
    focus: {
      scale: 1.02,
      boxShadow: `0 0 8px ${theme.accent || "#3B82F6"}`,
      borderColor: theme.accent || "#3B82F6",
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, type: "spring", stiffness: 100 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: theme.accent || "#1E40AF",
      boxShadow: `0 0 15px ${theme.accent || "#1E40AF"}`,
    },
    tap: { scale: 0.95 },
  };

  // Helper for conditional text colors based on theme.text
  const textColorClass = theme.text === "text-white" ? "text-white" : "text-gray-800";
  const textColorLight = theme.text === "text-white" ? "rgba(255,255,255,0.85)" : "#1f2937"; // gray-800


   const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Add FormSubmit hidden fields
  formData.append("_captcha", "false");

  try {
    const response = await fetch("https://formsubmit.co/modudeveloper@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      navigate("/thank-you"); // Navigate only if the form was successfully sent
    } else {
      console.error("FormSubmit error", await response.text());
      alert("There was a problem sending your message. Please try again.");
    }
  } catch (error) {
    console.error("Form submission failed", error);
    alert("An error occurred while submitting the form.");
  }
};

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300"
        onClick={scrollToForm}
        title="Contact Me"
        style={{
          backgroundColor: theme.accent || "#3B82F6",
          color: theme.text === "text-white" ? "white" : "black",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.buttonBg
            ? getComputedStyle(document.documentElement).getPropertyValue(`--tw-bg-opacity`) // fallback
            : theme.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme.accent || "#3B82F6";
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${theme.background}`}
      >
        <div
          className="max-w-xl w-full space-y-8 p-8 rounded-lg shadow-lg"
          style={{
            backgroundColor:
              theme.cardBg?.includes("opacity")
                ? theme.cardBg.replace("bg-", "").replace("bg-opacity-", "") || "rgba(255,255,255,0.9)"
                : "white",
            boxShadow: theme.shadow || "0 4px 15px rgba(0,0,0,0.1)",
            color: textColorLight,
          }}
        >
          <div className="text-center">
            <h1 className={`text-4xl font-bold mb-2`} style={{ color: theme.accent }}>
              Contact
            </h1>
            <p className={`mt-2 font-semibold`} style={{ color: textColorLight }}>
              I'd love to <span className="font-bold">{`hear`}</span> from you!
            </p>
            <p className="text-sm mt-1" style={{ color: textColorLight }}>
              Fill out the form below and I'll get back to you as soon as possible. ✨
            </p>
          </div>

          <form
            action="https://formsubmit.co/modudeveloper@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://your-portfolio.netlify.app/thank-you"
            />

            {/* Name */}
            <motion.div
              custom={0}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: textColorLight }}
              >
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                required
                pattern="^[a-zA-Z\s]{2,30}$"
                title="Name must be 2-30 characters with only letters and spaces"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                style={{
                  borderColor: "#ccc",
                  color: theme.text === "text-white" ? "white" : "black",
                  backgroundColor: theme.text === "text-white" ? "rgba(255,255,255,0.1)" : "white",
                }}
                whileFocus="focus"
                variants={fieldVariants}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              custom={1}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: textColorLight }}
              >
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                style={{
                  borderColor: "#ccc",
                  color: theme.text === "text-white" ? "white" : "black",
                  backgroundColor: theme.text === "text-white" ? "rgba(255,255,255,0.1)" : "white",
                }}
                whileFocus="focus"
                variants={fieldVariants}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div
              custom={2}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: textColorLight }}
              >
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="number"
                pattern={"^\\+?[0-9]{10,13}$"}
                title="Phone number must be 10-13 digits with optional +"
                placeholder="e.g. +91 9876543210"
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none"
                style={{
                  borderColor: "#ccc",
                  color: theme.text === "text-white" ? "white" : "black",
                  backgroundColor: theme.text === "text-white" ? "rgba(255,255,255,0.1)" : "white",
                }}
                whileFocus="focus"
                variants={fieldVariants}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label
                className="block text-sm font-medium mb-1"
                style={{ color: textColorLight }}
              >
                Message
              </label>
              <motion.textarea
                name="message"
                required
                minLength={10}
                maxLength={500}
                placeholder="Type your message here..."
                className="mt-1 w-full px-4 py-2 h-32 border rounded-md shadow-sm resize-none focus:outline-none"
                style={{
                  borderColor: "#ccc",
                  color: theme.text === "text-white" ? "white" : "black",
                  backgroundColor: theme.text === "text-white" ? "rgba(255,255,255,0.1)" : "white",
                }}
                whileFocus="focus"
                variants={fieldVariants}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            {/* Submit */}
            {/* <motion.button
              type="submit"
              className="w-full py-2 px-6 rounded-md font-medium shadow-md"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              style={{
                backgroundColor: theme.accent || "#3B82F6",
                color: "white",
                boxShadow: `0 4px 10px ${theme.accent || "#3B82F6"}`,
              }}
            >
              Send Message
            </motion.button> */}

              <motion.button
              type="submit"
              className="w-full py-2 px-6 rounded-md font-medium shadow-md"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
               style={{
                backgroundColor: theme.accent || "#3B82F6",
                color: "white",
                boxShadow: `0 4px 10px ${theme.accent || "#3B82F6"}`,
              }}
            >
              Send Message
            </motion.button>
          </form>

          <h2
            className="text-center text-sm mt-6"
            style={{ color: textColorLight }}
          >
            Thanks for reaching out! 💌
          </h2>
        </div>
      </div>
    </>
  );
}
