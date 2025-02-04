import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Provider, useSelector } from "react-redux";
import { store } from "../store";
import { DarkmodeState } from "../features/darkmodeSlice";

const Layout = () => {
  const darkmode = useSelector(
    (state: { darkmode: DarkmodeState }) => state.darkmode.isDarkMode
  );

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
