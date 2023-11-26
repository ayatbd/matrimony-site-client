import { Outlet } from "react-router-dom";
import Footer from "./../pages/Footer";
import Navigation from "./../pages/Navigation";
import ScrollToTop from "react-scroll-to-top";
import "../index.css";

const Main = () => {
  return (
    <div>
      <ScrollToTop width="20" height="20" top="700" smooth color="#fff" />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
