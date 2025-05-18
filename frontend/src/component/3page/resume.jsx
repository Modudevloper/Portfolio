import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";

const ResumeSection = () => {
  const objective =
    "Self-motivated 12th-grade graduate with a strong passion for web development and a completed MERN Stack course. Looking to secure a position as a full-stack developer to utilize my expertise in front-end and back-end development, while gaining real-world experience in a fast-paced tech environment.";

  const skills = [
    { category: "Frontend", list: "HTML, CSS, JavaScript, Tailwind CSS, React, Responsive Design" },
    { category: "Backend", list: "Node.js, Express.js, REST APIs" },
    { category: "Database", list: "MongoDB, Basic SQL" },
    { category: "Tools", list: "Postman, Git, GitHub" },
  ];

  const softSkills = ["Adaptability", "Problem-solving", "Teamwork", "Creativity"];

  const certifications = [
    "Computer Basic Certificate",
    "Web Designing Certificate",
    "MERN Stack Certificate from OnetickCDC",
  ];

  const education = [
    {
      year: "Present",
      title: "Bachelor of Computer Applications (BCA)",
      desc: "MDU University – 1st Year (Non-Attending)",
    },
    {
      year: "2022",
      title: "12th from HBSE",
      desc: "",
    },
  ];

  const experience = [
    {
      year: "6 Months",
      title: "Web Developer Intern",
      desc: "Worked on various web projects and practical development tasks.",
    },
  ];

  const projects = [
    "Weather Forecast",
    "School Management ERP",
    "SRS School",
    "Election ERP (VotePro) – Pending",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="min-h-screen flex justify-center bg-gray-100 text-black font-sans px-4 py-10 sm:py-16">
      <motion.div
        className="w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
      >
        {/* Objective */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 border-l-4 border-yellow-500 pl-4"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          RESUME
        </motion.h2>

        <motion.div
          className="mb-10 p-6 bg-white rounded-lg shadow-md"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">OBJECTIVE</h3>
          <p className="text-sm text-gray-700">{objective}</p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center gap-2">
              <FaCode /> TECHNICAL SKILLS
            </h3>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-2">
              {skills.map((skill, i) => (
                <li key={i}>
                  <span className="font-semibold">{skill.category}:</span> {skill.list}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">SOFT SKILLS</h3>
            <ul className="list-none space-y-2 text-sm text-gray-700">
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-10"
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center gap-2">
            <FaCertificate /> CERTIFICATIONS
          </h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Education */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            custom={8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
              <FaGraduationCap /> EDUCATION
            </h3>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="border-l-4 border-yellow-500 pl-4 relative">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></div>
                  <span className="text-sm font-medium text-gray-600">{item.year}</span>
                  <h4 className="text-md font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            custom={9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
              <FaBriefcase /> EXPERIENCE
            </h3>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <div key={i} className="border-l-4 border-yellow-500 pl-4 relative">
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></div>
                  <span className="text-sm font-medium text-gray-600">{item.year}</span>
                  <h4 className="text-md font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          custom={10}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center gap-2">
            <FaProjectDiagram /> PROJECTS
          </h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            {projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
