import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Provider, useSelector } from "react-redux";
import { store } from "../store";
import { DarkmodeState } from "../features/darkmodeSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );
  const location = useLocation(); // Get the current location from react-router-dom

  // Scroll to the top whenever the route changes
  useEffect(() => {
    const mainContent = document.querySelector("main"); // Select the main content area
    if (mainContent) {
      mainContent.scrollTop = 0; // Reset scroll position inside the main content
    }
  }, [location]);

  return (
    <div
      className={`flex h-screen w-full ${
        darkmode ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-950"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Sidebar (fixed height) */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Navbar />
        {/* Page Content (scrolls inside, not the whole page) */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const MainLayout = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default MainLayout;
