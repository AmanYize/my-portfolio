import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiGit,
  SiLinkedin,
  SiCodecademy,
  SiCoursera,
} from "react-icons/si";

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

// Certification data
const certificationsData = [
  {
    title: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/ec6a7ce63db27f63ab1dcb8f50236e94bdd0a94b324ca37d601bdbd4830b7bc5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Mastered HTML, CSS, JavaScript, React, Node.js, SQL/NoSQL, REST APIs, and server-side languages (PHP, .NET, Ruby on Rails). Built dynamic, data-driven websites and apps.",
    date: "Sep 2024",
  },
  {
    title: "Learn Next.js Course",
    issuer: "Codecademy",
    icon: <SiCodecademy className="text-yellow-500 text-4xl" />,
    link: "https://www.codecademy.com/profiles/blog4098630702/certificates/6567723e030e4c0089836b44fa56495c",
    description:
      "Built fast, SEO-friendly web apps with Next.js, focusing on server-side rendering, static generation, dynamic routing, and efficient deployment.",
    date: "Jan 2025",
  },
  {
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan",
    icon: <FaPython className="text-yellow-400 text-4xl" />,
    link: "https://www.coursera.org/account/accomplishments/specialization/PC6ULRD29EWL",
    description:
      "Mastered Python, data structures, web scraping, and databases. Gained hands-on experience with APIs, SQL, and JSON, applied in a capstone project.",
    date: "Dec 2023",
  },
  {
    title: "Relational Database Design",
    issuer: "University of Colorado Boulder",
    icon: <FaDatabase className="text-green-500 text-4xl" />,
    link: "https://www.coursera.org/account/accomplishments/records/LG88WH2PGZ32",
    description:
      "Learned to create Entity Relationship Models and Diagrams, design relational models, and normalize databases to 3NF.",
    date: "Dec 2023",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    icon: <FaReact className="text-sky-400 text-4xl" />,
    link: "https://freecodecamp.org/certification/fcc0eb12d59-3e1a-4563-bc94-35fefa5cc616/front-end-development-libraries",
    description:
      "Built responsive apps with React, Redux, Bootstrap, and jQuery. Focused on UI/UX, state management, and scalable front-end solutions.",
    date: "Feb 2024",
  },
  {
    title: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    link: "https://freecodecamp.org/certification/fcc0eb12d59-3e1a-4563-bc94-35fefa5cc616/back-end-development-and-apis",
    description:
      "Developed back-end services using Node.js, Express, and MongoDB. Learned to work with RESTful APIs, authentication, and databases.",
    date: "Aug 2024",
  },
  {
    title: "Getting Started with Flutter Development",
    issuer: "Google",
    icon: <SiFlutter className="text-cyan-500 text-4xl" />,
    link: "https://www.coursera.org/account/accomplishments/records/AMS3ST733YYW",
    description:
      "Learned cross-platform mobile development using Flutter and Dart, building apps for iOS and Android.",
    date: "Dec 2023",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    link: "https://freecodecamp.org/certification/fcc0eb12d59-3e1a-4563-bc94-35fefa5cc616/responsive-web-design",
    description:
      "Mastered HTML, CSS, and responsive design principles to build user-friendly, accessible websites.",
    date: "Nov 2023",
  },
  {
    title: "Tailwind CSS 3 Essential Training",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/9ddf4c8c8b2773731aa7fb93c6173df216e686c5dcbce12f5915c10943d1df0e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned Tailwind CSS for utility-first styling, creating responsive and modern web designs.",
    date: "Jan 2025",
  },
  {
    title: "CSS Essential Training",
    issuer: "LinkedIn",
    icon: <FaCss3Alt className="text-blue-400 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/2b09e3b617474e57525e379b6cac1b31c64f9438c718c903f9ebe18f1db530f5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Mastered Cascading Style Sheets (CSS) for styling and designing modern web applications.",
    date: "Sep 2024",
  },
  {
    title: "DevOps Foundations",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/61281df6df42f88771bd28d9e9c60fad08cdcc2d120f917596bc4fdb32c3c5a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Explored DevOps practices, including CI/CD pipelines, infrastructure as code, and collaboration tools.",
    date: "Sep 2024",
  },
  {
    title: "Git Essential Training",
    issuer: "LinkedIn",
    icon: <SiGit className="text-red-500 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/858ad6b0222fba5e027db00cfc61f1ec49f9ed96e94accf344457f3bbd363559?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned Git for version control, managing repositories, and collaborating on software projects.",
    date: "Sep 2024",
  },
  {
    title: "JavaScript Essential Training",
    issuer: "LinkedIn",
    icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/87b6d5a811453c23938c903a08f48e7a1638c7611a41ba8f8f8db4f83bd2d523?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Mastered JavaScript fundamentals, including DOM manipulation, ES6+ features, and asynchronous programming.",
    date: "Sep 2024",
  },
  {
    title: "Learning REST APIs",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/86b68562cd3a1d7f68f94725adf0881baba8a8dfa16b49686aa69082c65f6730?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned to design and consume RESTful APIs, working with HTTP methods, endpoints, and authentication.",
    date: "Sep 2024",
  },
  {
    title: "NoSQL Essential Training",
    issuer: "LinkedIn",
    icon: <SiMongodb className="text-green-500 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/d48e9273c76c167d3a8f8328abf70de7ea05c1f558faf7ada89163501deeb46a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Explored NoSQL databases like MongoDB, focusing on schema design, queries, and scalability.",
    date: "Sep 2024",
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn",
    icon: <SiPostgresql className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/64a7b243ceda3c733a0f72ab6658a8dc18c5bdd0201f0385c5bf164c1661d15c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned SQL for database querying, joins, indexing, and optimization.",
    date: "Sep 2024",
  },
  {
    title: "Search Techniques for Web Developers",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/7c2cda5189a32e556ed75fe9ce07ba5a53b274196883ea7e79d2384aec8d0de3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Explored search techniques for improving web application performance and user experience.",
    date: "Sep 2024",
  },
  {
    title: "React Native Essential Training",
    issuer: "LinkedIn",
    icon: <FaReact className="text-sky-400 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/945585f05a5cfbae11c29a60779c8f4d176f3250c52d0ad4a0de8a2efb829f71?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned React Native for building cross-platform mobile applications with JavaScript.",
    date: "Mar 2024",
  },
  {
    title: "Flutter Essential Training: Build for Multiple Platforms",
    issuer: "LinkedIn",
    icon: <SiFlutter className="text-cyan-500 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/24bcbf7bfba08457f64ec52c30264afa3396c2f809687d432ed1020a795108f6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Learned Flutter for building apps for iOS, Android, and the web using Dart.",
    date: "Feb 2024",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    icon: <SiLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/learning/certificates/9d64cb3b8bb0e321ee4bcfc161721ae9b5329da0e9698ac544a3426f1e9087b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bn1xOXJ62SWSOIPTCWV7iNw%3D%3D",
    description:
      "Explored AI concepts, including machine learning, neural networks, and AI applications in business.",
    date: "Dec 2023",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    icon: <SiCoursera className="text-green-500 text-4xl" />,
    link: "https://www.coursera.org/account/accomplishments/certificate/P2VKHQPEU4XW",
    description:
      "Learned networking fundamentals, including IP addressing, DNS, and network protocols.",
    date: "Nov 2023",
  },
];

// Certification Card Component
interface CertificationCardProps {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  link: string;
  description: string;
  date: string;
  darkmode: boolean;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  icon,
  link,
  description,
  date,
  darkmode,
}) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md ${
      darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{issuer}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">Issued: {date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          darkmode
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-purple-100 text-purple-800 hover:bg-purple-200"
        }`}
      >
        View Credential
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
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
          My Certifications
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          A showcase of my continuous learning journey through certifications in
          web development, programming, databases, and more.
        </motion.p>
      </section>

      {/* Certifications Grid */}
      <section className="certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              icon={cert.icon}
              link={cert.link}
              description={cert.description}
              date={cert.date}
              darkmode={darkmode}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications;
