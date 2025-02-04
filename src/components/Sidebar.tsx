import { Link, useLocation } from "react-router-dom"; // Removed useMatch, used pathname directly
import { useSelector, useDispatch } from "react-redux";
import { SidebarState, toggleSidebar } from "../features/sidebarSlice";
import {
  Home,
  Info,
  Folder,
  LibraryBig,
  Contact,
  Menu,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DarkmodeState } from "../features/darkmodeSlice";

const Sidebar = () => {
  const { pathname } = useLocation(); // useLocation gives the current path
  const isOpen = useSelector(
    (state: { sidebar: SidebarState }) => state.sidebar.isOpen
  );
  const dispatch = useDispatch();
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/about", icon: Info, label: "About" },
    { to: "/projects", icon: Folder, label: "Projects" },
    { to: "/skills", icon: LibraryBig, label: "Skills" },
    { to: "/certifications", icon: Award, label: "Skills" },
    { to: "/contact", icon: Contact, label: "Contact" },
  ];

  return (
    <motion.div
      animate={{ width: isOpen ? "240px" : "64px" }}
      transition={{ duration: 0.5 }}
      className={`${
        darkmode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-950"
      } h-screen flex flex-col border-r border-slate-700/50 shadow-xl`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700/50">
        <motion.button
          className="pl-1 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          onClick={() => dispatch(toggleSidebar())}
        >
          <Menu className="w-6 h-6" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-lg font-semibold"
            >
              A.Y
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col p-2 space-y-1 mt-4">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = pathname === to;

          return (
            <motion.div
              key={to}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className={`rounded-lg`}
            >
              <Link
                to={to}
                className={`flex items-center h-12 px-3 transition-colors`}
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      className="absolute -left-1 w-1 h-6 bg-blue-500 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 text-sm font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Subtle Footer */}
      {isOpen && (
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center text-slate-500 text-xs">
            {<p>© {new Date().getFullYear()} amanuel yizelkal</p>}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Sidebar;
