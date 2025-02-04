import { useSelector } from "react-redux";
import { DarkmodeState } from "../features/darkmodeSlice";

const Footer = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );
  return (
    <footer
      className={`w-full h-16 flex items-center justify-center ${
        darkmode ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-950"
      }`}
    >
      <p>© {new Date().getFullYear()} amanuel yizelkal. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
