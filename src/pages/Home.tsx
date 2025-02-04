import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import {
  CodeBracketIcon,
  TrophyIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillsData = [
    { skill: "Frontend", value: 95 },
    { skill: "Backend", value: 90 },
    { skill: "Database", value: 88 },
    { skill: "Mobile", value: 85 },
    { skill: "DevOps", value: 82 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen transition-colors duration-300 ${
        darkmode ? "bg-slate-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto p-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-16"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            src="/assets/amanuel.jpg"
            alt="Amanuel Yizelkal"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
          />
          <div className="text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Amanuel Yizelkal
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-purple-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              Full-Stack Developer & Algorithmic Trader
            </motion.p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:amanuel.yizelkal.dev@gmail.com"
                className="flex items-center justify-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                amanuel.yizelkal.dev@gmail.com
              </motion.a>
              <motion.span className="flex items-center justify-center gap-2">
                <DevicePhoneMobileIcon className="w-5 h-5" />
                +215985855044
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <Link to="/certifications" className="cursor-pointer">
            <motion.div variants={itemVariants}>
              <StatCard
                icon={<TrophyIcon className="w-7 h-7" />}
                title="35 Certifications"
                value="Expert Level"
                darkmode={darkmode}
              />
            </motion.div>
          </Link>
          <Link to="/projects" className="cursor-pointer">
            <motion.div variants={itemVariants}>
              <StatCard
                icon={<CodeBracketIcon className="w-7 h-7" />}
                title="12 Projects"
                value="Production Ready"
                darkmode={darkmode}
              />
            </motion.div>
          </Link>
          <motion.div variants={itemVariants}>
            <StatCard
              icon={<BookOpenIcon className="w-7 h-7" />}
              title="5 Years"
              value="CS Education"
              darkmode={darkmode}
            />
          </motion.div>
        </motion.div>

        {/* Responsive Skills Chart */}
        <Link to={"/skills"} className="cursor-pointer">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`cursor-pointer p-4 md:p-6 rounded-2xl mb-12 ${
              darkmode ? "bg-slate-800" : "bg-slate-50"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Technical Expertise
            </h2>
            <div className="h-64 md:h-80 cursor-pointer">
              <ResponsiveContainer
                className={"cursor-pointer"}
                width="100%"
                height="100%"
              >
                <RadarChart className={"cursor-pointer"} data={skillsData}>
                  <PolarGrid stroke={darkmode ? "#475569" : "#e2e8f0"} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: darkmode ? "#e2e8f0" : "#1e293b" }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    className={"cursor-pointer"}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </Link>
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          <motion.a
            href="https://amanyize-inventory.netlify.app/"
            target="_blank"
          >
            <ProjectCard
              title="Inventory System"
              tech={["Next.js", "Node.js", "Prisma"]}
              progress={85}
              darkmode={darkmode}
            />
          </motion.a>
          <motion.a
            href="https://earnest-llama-65b1b2.netlify.app/"
            target="_blank"
          >
            <ProjectCard
              title="E-Commerce Platform"
              tech={["Flutter", "Firebase"]}
              progress={92}
              darkmode={darkmode}
            />
          </motion.a>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`p-4 md:p-6 rounded-2xl ${
            darkmode ? "bg-slate-800" : "bg-slate-50"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Top Certifications
          </h2>
          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 h-48 bg-slate-200 dark:bg-slate-700 rounded-xl p-4"
              >
                <div className="h-full bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-300">
                    Cert {i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  darkmode: boolean;
}

const StatCard = ({ icon, title, value, darkmode }: StatCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`flex items-center gap-4 p-4 rounded-xl ${
      darkmode ? "bg-slate-800" : "bg-white shadow-md"
    }`}
  >
    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
      {icon}
    </div>
    <div>
      <div className="text-lg md:text-xl font-semibold mb-1">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
    </div>
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  tech: string[];
  progress: number;
  darkmode: boolean;
}

const ProjectCard = ({ title, tech, progress, darkmode }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`p-4 rounded-xl ${
      darkmode ? "bg-slate-800" : "bg-white shadow-md"
    }`}
  >
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, i) => (
        <motion.span
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`px-2 py-1 text-xs md:text-sm rounded-full ${
            darkmode
              ? "bg-slate-700 text-purple-400"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {t}
        </motion.span>
      ))}
    </div>
    <div className="relative pt-2">
      <div
        className={`h-2 rounded-full ${
          darkmode ? "bg-slate-700" : "bg-slate-200"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
        />
      </div>
      <div className="text-right text-sm mt-1 text-purple-500">
        {progress}% Complete
      </div>
    </div>
  </motion.div>
);

export default Dashboard;
