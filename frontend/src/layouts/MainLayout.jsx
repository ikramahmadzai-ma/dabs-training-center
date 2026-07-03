import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import TopBar from "../components/common/TopBar";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
