import { AnimatePresence, motion } from "framer-motion";
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
import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";

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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const certificates = [
    {
      title: "Full-Stack Web Development",
      link: "https://www.linkedin.com/learning/certificates/ec6a7ce63db27f63ab1dcb8f50236e94bdd0a94b324ca37d601bdbd4830b7bc5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BVB0r0TJrR82QK7GOQ%2B4q%2BQ%3D%3D",
    },
    {
      title: "Python Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/PC6ULRD29EWL",
    },
    {
      title: "Learn Next js",
      link: "https://www.codecademy.com/profiles/blog4098630702/certificates/6567723e030e4c0089836b44fa56495c",
    },
    {
      title: "Front End Developent Libraries",
      link: "https://freecodecamp.org/certification/fcc0eb12d59-3e1a-4563-bc94-35fefa5cc616/front-end-development-libraries",
    },
    {
      title: "Back End Development And APIs",
      link: "https://freecodecamp.org/certification/fcc0eb12d59-3e1a-4563-bc94-35fefa5cc616/back-end-development-and-apis",
    },
    {
      title: "Learn TypeScript",
      link: "https://www.codecademy.com/profiles/blog4098630702/certificates/56fb1e71303e37b643bb1905f31c8a09",
    },
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
                target="_blank"
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
            <div className="mt-5 flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/AmanYize"
                target="_blank"
                className={`flex items-center justify-center gap-2 p-3 ${
                  darkmode
                    ? "bg-slate-950 border border-slate-700 hover:bg-slate-800"
                    : "bg-slate-100 border border-slate-500 hover:bg-slate-200"
                } rounded-lg transition-all duration-30`}
              >
                <Github
                  className={`w-6 h-6 transition-all duration-300 group-hover:text-black dark:group-hover:text-white`}
                />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/amanuel-yizelkal"
                target="_blank"
                className={`flex items-center justify-center gap-2 p-3 ${
                  darkmode
                    ? "bg-slate-950 border border-slate-700 hover:bg-slate-800"
                    : "bg-slate-100 border border-slate-500 hover:bg-slate-200"
                } rounded-lg transition-all duration-30`}
              >
                <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:text-blue-600" />
              </motion.a>
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
          <div
            className={`${
              darkmode ? "bg-slate-700" : "bg-slate-200"
            } flex justify-center items-center w-full py-10 rounded-xl shadow-lg overflow-hidden`}
          >
            <div className="relative w-full max-w-lg h-40 md:h-48 lg:h-56 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {certificates.map(
                  (cert, i) =>
                    i === index && (
                      <motion.a
                        key={i}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`${
                          darkmode
                            ? "bg-slate-900 border border-slate-500 hover:bg-slate-800"
                            : "bg-slate-100 border border-slate-300 hover:bg-slate-200"
                        } absolute w-full  shadow-xl rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:shadow-2xl`}
                      >
                        <h3 className=" font-semibold text-lg md:text-xl">
                          {cert.title}
                        </h3>
                        <span className="mt-2 text-blue-500 dark:text-blue-400 font-medium text-sm md:text-base">
                          Click to view certificate
                        </span>
                      </motion.a>
                    )
                )}
              </AnimatePresence>
            </div>
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
