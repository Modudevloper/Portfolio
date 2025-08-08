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
import { useTheme } from "../themecontex/theme"; // Your theme context hook

const ResumeSection = () => {
  const { theme } = useTheme();

  const objective =
    "Motivated and fast-learning Frontend Developer with solid skills in HTML, CSS, JavaScript, and React.js. Completed MERN Stack training and eager to contribute to real-world projects. Passionate about building clean, responsive UIs and continuously improving through hands-on learning.";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Postman",
    "GitHub",
    "VS Code",
  ];

  const softSkills = ["Fast Learner", "Team Player", "Problem Solver", "UI-Focused"];

  const education = [
    { year: "2024–27", title: "BCA – YMCA University (2nd Year)" },
    { year: "2022", title: "12th (Commerce) – HBSE, 69%" },
  ];

  const experience = [{ year: "6 Months", title: "Frontend Intern – Adhana Innovation" }];

  const projects = [
    "ERP School Management (In Progress)",
    "SRS Sr. Sec. School Blog",
    "VotePro Blog",
    "Adhana Innovation Blog",
  ];

  const certifications = [
    "MERN Stack – Ontick CDC Technology",
    "Web Designing Certificate",
    "Computer Basics Certificate",
  ];

  return (
    <section
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-10 font-sans transition-colors duration-500 ${theme.background} ${theme.text}`}
    >
      <motion.div
        className="max-w-5xl mx-auto space-y-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold border-l-4 pl-4"
          style={{ borderColor: "transparent" }}
          custom={1}
          variants={fadeUp}
        >
          <span className={`${theme.buttonBg} px-2 rounded-sm text-white`}>RESUME</span>
        </motion.h2>

        {/* Objective Section */}
        <motion.div
          className={`p-4 rounded shadow ${theme.cardBg}`}
          style={{ boxShadow: theme.shadow }}
          custom={2}
          variants={fadeUp}
        >
          <h3
            className={`text-lg font-semibold mb-2 pl-1 flex items-center gap-1 ${theme.buttonBg} text-white rounded-sm px-1`}
          >
            🎯 Objective
          </h3>
          <p className="text-sm leading-relaxed">{objective}</p>
        </motion.div>

        {/* Skills + Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className={`p-4 rounded shadow bg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={3}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              <FaCode /> Technical Skills
            </h3>
            <ul className="text-sm  list-disc pl-5">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={`p-4 rounded shadow bg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={4}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              Soft Skills
            </h3>
            <ul className="text-sm space-y-1">
              {softSkills.map((skill, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${theme.text}`}
                >
                  <FaCheckCircle className={`${theme.buttonBg} text-white rounded-full`} />{" "}
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className={`p-4 rounded shadow bg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={5}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              <FaGraduationCap /> Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="text-sm mb-2">
                <p className="font-medium">{edu.year}</p>
                <p>{edu.title}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={`p-4 rounded shadowbg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={6}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              <FaBriefcase /> Experience
            </h3>
            {experience.map((exp, i) => (
              <div key={i} className="text-sm mb-2">
                <p className="font-medium">{exp.year}</p>
                <p>{exp.title}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications + Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className={`p-4 rounded shadow bg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={7}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              <FaCertificate /> Certifications
            </h3>
            <ul className="list-disc pl-5 text-sm">
              {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={`p-4 rounded shadow bg-opacity-10`}
            style={{ boxShadow: theme.shadow }}
            custom={8}
            variants={fadeUp}
          >
            <h3
              className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme.buttonBg} text-white rounded-sm px-1`}
            >
              <FaProjectDiagram /> Projects
            </h3>
            <ul className="list-disc pl-5 text-sm">
              {projects.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
