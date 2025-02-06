import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
import {
  FaReact,
  FaChartLine,
  FaBug,
  FaSearch,
  FaClock,
  FaUserAstronaut,
  FaComments,
  FaNetworkWired,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiReact,
  SiBinance,
  SiFastly,
  SiTestinglibrary,
  SiPinescript,
} from "react-icons/si";
import { TbApi, TbCloudComputing, TbBrandFirebase } from "react-icons/tb";
import { RiFileCodeLine, RiPsychotherapyFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di"; // Colored icons from react-icons
import { SiPostgresql, SiMongodb, SiVercel } from "react-icons/si"; // Brand-specific icons

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

// Skill data with colored icons
const skillsData = [
  {
    category: "Programming Languages & Frameworks",
    items: [
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-400" />,
      },
      { name: "React", icon: <DiReact className="text-sky-400" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-700 dark:text-gray-500" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <DiPython className="text-yellow-500" /> },
      {
        name: "SQL (PostgreSQL)",
        icon: <SiPostgresql className="text-blue-600" />,
      },
      {
        name: "NoSQL (MongoDB)",
        icon: <SiMongodb className="text-green-600" />,
      },
      { name: "Dart (Flutter)", icon: <SiDart className="text-cyan-500" /> },
      {
        name: "Pine Script (TradingView)",
        icon: <SiPinescript className="text-purple-500" />,
      },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      {
        name: "Firebase Realtime Database",
        icon: <TbBrandFirebase className="text-orange-500" />,
      },
    ],
  },
  {
    category: "Web Development & Tools",
    items: [
      {
        name: "Full-Stack Development",
        icon: <FaReact className="text-sky-400" />,
      },
      { name: "React", icon: <DiReact className="text-sky-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-700 dark:text-gray-500" />,
      },
      {
        name: "RESTful API Development",
        icon: <TbApi className="text-indigo-500" />,
      },
      {
        name: "Web Hosting (Vercel, Render, Netlify, Heroku)",
        icon: <SiVercel className="text-black dark:text-white" />,
      },
      {
        name: "Version Control (Git, GitHub, GitLab)",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "Redux / Redux Toolkit",
        icon: <SiRedux className="text-purple-500" />,
      },
    ],
  },
  {
    category: "Software Development Practices",
    items: [
      {
        name: "Agile Methodology",
        icon: <SiFastly className="text-red-500" />,
      },
      {
        name: "Clean Code",
        icon: <RiFileCodeLine className="text-green-500" />,
      },
      {
        name: "Debugging & Troubleshooting",
        icon: <FaBug className="text-red-500" />,
      },
      {
        name: "Unit & Integration Testing",
        icon: <SiTestinglibrary className="text-pink-500" />,
      },
    ],
  },
  {
    category: "Automation & Trading",
    items: [
      {
        name: "Crypto Futures Trading",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        name: "Binance API (Testnet)",
        icon: <SiBinance className="text-yellow-500" />,
      },
      {
        name: "Algorithmic Trading",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        name: "Trading Strategies",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        name: "Market Analysis",
        icon: <FaChartLine className="text-green-500" />,
      },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "React Native", icon: <SiReact className="text-sky-400" /> },
      {
        name: "Flutter (Cross-Platform Development)",
        icon: <SiFlutter className="text-cyan-500" />,
      },
    ],
  },
  {
    category: "Other Technical Skills",
    items: [
      { name: "API Integration", icon: <TbApi className="text-indigo-500" /> },
      {
        name: "Cloud Platforms (Firebase, Heroku)",
        icon: <TbCloudComputing className="text-blue-500" />,
      },
      {
        name: "Data Analysis",
        icon: <FaChartLine className="text-green-500" />,
      },
      {
        name: "Network Management & Security",
        icon: <FaNetworkWired className="text-blue-500" />,
      },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      {
        name: "Problem-Solving",
        icon: <RiPsychotherapyFill className="text-purple-500" />,
      },
      {
        name: "Attention to Detail",
        icon: <FaSearch className="text-yellow-500" />,
      },
      { name: "Time Management", icon: <FaClock className="text-gray-500" /> },
      {
        name: "Collaboration",
        icon: <FaUserAstronaut className="text-indigo-500" />,
      },
      {
        name: "Client Communication",
        icon: <FaComments className="text-blue-500" />,
      },
    ],
  },
];

// Skill Item Component
interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  darkmode: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, darkmode }) => (
  <motion.div
    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${
      darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-lg font-medium">{name}</p>
  </motion.div>
);

const Skills = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

  return (
    <motion.div
      className={`min-h-screen p-8 ${
        darkmode ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-950"
      } transition-all duration-300 ease-in-out`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="hero mb-12">
        <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
          My Skills
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          A showcase of my technical expertise across various domains, including
          web development, databases, automation, and more.
        </motion.p>
      </section>
      {/* Skills Grid */}
      <section className="skills">
        {skillsData.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">{category.category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.items.map((skill, idx) => (
                <SkillItem
                  key={idx}
                  name={skill.name}
                  icon={skill.icon}
                  darkmode={darkmode}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
};

export default Skills;
