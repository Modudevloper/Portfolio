import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const contactRef = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! 😊");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        toast.error(result?.message || "Something went wrong! 😞");
      }
    } catch (error) {
      toast.error("Network error. Please try again later! 🚫");
    } finally {
      setLoading(false);
    }
  };

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
    focus: { scale: 1.02, boxShadow: "0 0 8px rgb(96 165 250)" },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, type: "spring", stiffness: 100 },
    },
    hover: { scale: 1.05, backgroundColor: "#1E40AF" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all duration-300"
        onClick={scrollToForm}
        title="Contact Me"
      >
        <MessageCircle className="w-6 h-6" />
      </div>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {/* Contact Section */}
      <div
        ref={contactRef}
        className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
            <p className="mt-2 text-gray-600">
              I'd love to <span className="font-semibold text-black">hear</span> from you!
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Fill out the form below and I'll get back to you as soon as possible. ✨
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "number"].map((field, i) => (
              <motion.div
                key={field}
                custom={i}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {field === "number" ? "Phone Number" : field}
                </label>
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "number"
                      ? "e.g. +91 98765 43210"
                      : field === "email"
                      ? "you@example.com"
                      : "Your name"
                  }
                  required={field !== "number"}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  whileFocus={fieldVariants.focus}
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </motion.div>
            ))}

            <motion.div
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
                className="mt-1 w-full px-4 py-2 h-32 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none"
                whileFocus={fieldVariants.focus}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-6 rounded-md shadow-md font-medium"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          <h2 className="text-center text-sm text-gray-600 mt-6">
            Thanks for reaching out! 💌
          </h2>
        </div>
      </div>
    </>
  );
}
