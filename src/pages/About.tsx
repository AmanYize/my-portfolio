import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";
const About = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );
  return (
    <div
      className={`min-h-full ${
        darkmode ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-950"
      } h-full transition-all duration-300 ease-in-out`}
    >
      About
    </div>
  );
};

export default About;
