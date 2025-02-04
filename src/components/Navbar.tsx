import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { DarkmodeState, toggleDarkmode } from "../features/darkmodeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

  return (
    <nav
      className={` h-16 ${darkmode ? "border-b" : "border-b"} ${
        darkmode
          ? "bg-slate-950 text-slate-50 border-b-slate-800"
          : "bg-slate-50 text-slate-950 border-b-slate-300"
      } flex items-center justify-between px-6 py-4 shadow-md`}
    >
      <h1 className="text-xl font-semibold tracking-wide">Amanuel Yizelkal</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
      >
        {darkmode ? (
          <Sun
            onClick={() => dispatch(toggleDarkmode())}
            className="w-6 h-6 text-yellow-500 hover:text-yellow-400 transition-all duration-300"
          />
        ) : (
          <Moon
            onClick={() => dispatch(toggleDarkmode())}
            className="w-6 h-6 text-slate-800 hover:text-slate-600 transition-all duration-300"
          />
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
