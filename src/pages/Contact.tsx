import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

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

// Contact data
const contactsData = [
  {
    title: "Email",
    value: "amanuel.yizelkal.dev@gmail.com",
    icon: <FaEnvelope className="text-red-500 text-4xl" />,
    link: "mailto:amanuel.yizelkal.dev@gmail.com",
  },
  {
    title: "Phone",
    value: "+215985855044",
    icon: <FaPhone className="text-green-500 text-4xl" />,
    link: "tel:+215985855044",
  },
  {
    title: "LinkedIn",
    value: "amanuel-yizelkal",
    icon: <FaLinkedin className="text-blue-600 text-4xl" />,
    link: "https://www.linkedin.com/in/amanuel-yizelkal",
  },
  {
    title: "Telegram",
    value: "@aman_yize",
    icon: <FaTelegram className="text-blue-400 text-4xl" />,
    link: "https://t.me/aman_yize",
  },
  {
    title: "Discord",
    value: "amanyize_24623_88570",
    icon: <FaDiscord className="text-indigo-500 text-4xl" />,
    link: "https://discordapp.com/users/AmanYize",
  },
];

// Contact Card Component
interface ContactCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  link: string;
  darkmode: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  value,
  icon,
  link,
  darkmode,
}) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md flex items-center gap-4 ${
      darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-lg ${
          darkmode ? "text-purple-400" : "text-purple-600"
        } hover:underline`}
      >
        {value}
      </a>
    </div>
  </motion.div>
);

const Contacts = () => {
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
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          Feel free to reach out to me via email, phone, or any of my social
          media profiles.
        </motion.p>
      </section>

      {/* Contacts Grid */}
      <section className="contacts">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactsData.map((contact, index) => (
            <ContactCard
              key={index}
              title={contact.title}
              value={contact.value}
              icon={contact.icon}
              link={contact.link}
              darkmode={darkmode}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;
