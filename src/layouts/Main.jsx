import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
