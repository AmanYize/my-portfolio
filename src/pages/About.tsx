import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
import { FiCode, FiDatabase, FiTrendingUp } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Tooltip as RechartsTooltip,
} from "recharts";

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

// Skill data for radial chart
const skillData = [
  { name: "Frontend", value: 95, color: "#8b5cf6" },
  { name: "Backend", value: 90, color: "#7c3aed" },
  { name: "Database", value: 88, color: "#6d28d9" },
  { name: "Mobile", value: 85, color: "#5b21b6" },
];

// Tech Stack Card Component
interface TechStackCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  darkmode: boolean;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  icon,
  title,
  value,
  darkmode,
}) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md ${
      darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
    variants={itemVariants}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full ${
          darkmode ? "bg-purple-600" : "bg-purple-500"
        }`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </motion.div>
);

// Timeline Item Component
interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  points: string[];
  darkmode: boolean;
  reverse?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  points,
  darkmode,
  reverse,
}) => (
  <motion.div
    className={`timeline-item ${reverse ? "flex-row-reverse" : ""} flex gap-6 ${
      darkmode ? "text-white" : "text-gray-800"
    }`}
    variants={itemVariants}
  >
    <div className="flex-1">
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg text-gray-500 dark:text-gray-400">{company}</p>
      <p className="text-sm text-gray-400">{period}</p>
      <ul className="mt-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const About = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

  return (
    <motion.div
      className={`about-section min-h-screen p-8 ${
        darkmode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="hero mb-12">
        <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
          Hi there, I'm Amanuel Yizelkal
        </motion.h1>
        <motion.p className="text-xl mb-4" variants={itemVariants}>
          Full-Stack Developer & Algorithmic Trading Strategist
        </motion.p>
        <motion.p
          className="text-lg text-gray-500 dark:text-gray-400"
          variants={itemVariants}
        >
          I specialize in building scalable, high-performance applications with
          a focus on clean, maintainable code and seamless user experiences.
        </motion.p>
      </section>

      {/* Skills Visualization */}
      <section className="skills mb-12">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={skillData}
              >
                <RechartsTooltip />
                {skillData.map((entry, index) => (
                  <RadialBar key={index} dataKey="value" fill={entry.color} />
                ))}
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-6">
            <TechStackCard
              icon={<FiCode />}
              title="Frontend"
              value={97}
              darkmode={darkmode}
            />
            <TechStackCard
              icon={<FaNodeJs />}
              title="Backend"
              value={90}
              darkmode={darkmode}
            />
            <TechStackCard
              icon={<FiDatabase />}
              title="Databases"
              value={90}
              darkmode={darkmode}
            />
            <TechStackCard
              icon={<FiTrendingUp />}
              title="Trading"
              value={95}
              darkmode={darkmode}
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="experience mb-12">
        <motion.h2 className="text-3xl font-bold mb-8" variants={itemVariants}>
          Experience Timeline
        </motion.h2>
        <div className="space-y-8">
          <TimelineItem
            title="IT Support & Network Technician (Intern)"
            company="Ministry of Trade and Regional Integration"
            period="Jan 2024 - Apr 2024"
            points={[
              "Managed network infrastructure, ensuring reliable connectivity.",
              "Provided technical support for hardware, software, and network issues.",
              "Installed, configured, and maintained systems and enterprise software.",
              "Monitored security, troubleshot issues, and maintained system documentation.",
              "Assisted government teams with software maintenance and updates.",
            ]}
            darkmode={darkmode}
          />
          <TimelineItem
            title="Full Stack Developer"
            company="Freelance"
            period="Present"
            points={[
              "Developed and deployed full-stack applications using the MERN stack and Next.js.",
              "Built an Inventory Management System, e-commerce site, book store app, and quiz app with a focus on usability.",
              "Designed and iterated on a portfolio website to showcase projects.",
              "Deployed a to-do app backend on Render, managing API requests and databases.",
              "Integrated Next.js for performance optimization and explored modern web trends.",
            ]}
            darkmode={darkmode}
            reverse
          />
          <TimelineItem
            title="Algorithmic Trader & Strategy Developer"
            company="Independent"
            period="Present"
            points={[
              "Researched and developed crypto futures trading strategies using Pine Script.",
              "Built and tested trend-following and mean-reversion strategies with market structure, volume profile, and psychological price levels.",
              "Applied risk management techniques to reduce drawdowns and improve consistency.",
              "Developed an automated trading bot using the Binance API (testnet) in Python.",
            ]}
            darkmode={darkmode}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
