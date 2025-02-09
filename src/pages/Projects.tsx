import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";

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

// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  darkmode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveDemoUrl,
  githubUrl,
  darkmode,
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-md group ${
        darkmode ? "bg-gray-800" : "bg-white"
      }`}
      variants={itemVariants}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        {/* Overlay with Description */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100`}
        >
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-center px-4">{description}</p>
        </div>
      </div>

      {/* Title and Links */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                darkmode
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkmode
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-purple-100 text-purple-800 hover:bg-purple-200"
              }`}
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                darkmode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          A showcase of my work that highlights my expertise in full-stack
          development, automation, and algorithmic trading.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="projects mb-12">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Inventory Management System */}
          <ProjectCard
            title="Inventory Management System"
            description="A system to track products, stock levels, and orders. Built with Next.js, Node.js, Prisma, and PostgreSQL."
            technologies={[
              "Next.js",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "Tailwind CSS",
            ]}
            imageUrl="/assets/projects/inventory.png"
            liveDemoUrl="https://amanyize-inventory.netlify.app/"
            githubUrl="https://github.com/AmanYize/inventory-managment"
            darkmode={darkmode}
          />
          {/* E-Commerce Website */}
          <ProjectCard
            title="E-Commerce Website"
            description="A cross-platform e-commerce website using Flutter for mobile and web. Integrated Firebase for authentication and real-time database."
            technologies={["Flutter", "Firebase", "Dart", "Responsive Design"]}
            imageUrl="/assets/projects/ecommerce.png"
            liveDemoUrl="https://earnest-llama-65b1b2.netlify.app/"
            githubUrl="https://github.com/AmanYize/luna-market"
            darkmode={darkmode}
          />
          <ProjectCard
            title="MERN To-Do App"
            description="A full-stack to-do list application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This app allows users to create, read, update, and delete (CRUD) tasks. It features user authentication, a responsive UI, and a backend API to manage tasks."
            technologies={["Vite", "React", "Node", "Express", "MonogoDB"]}
            imageUrl="/assets/projects/tasks.png"
            liveDemoUrl="https://amanyize-tasks.netlify.app/"
            githubUrl="https://github.com/AmanYize/todo_app"
            darkmode={darkmode}
          />
          {/* Trading Bot */}
          <ProjectCard
            title="Algorithmic Trading Bot"
            description="An automated trading bot using Python and Binance API (testnet). Implements trend-following and mean-reversion strategies."
            technologies={[
              "Python",
              "Binance API",
              "Pine Script",
              "TradingView",
            ]}
            imageUrl="/assets/projects/trading-bot.png"
            githubUrl="https://github.com/example/trading-bot"
            darkmode={darkmode}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
