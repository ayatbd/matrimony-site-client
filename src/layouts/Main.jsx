import { Outlet } from "react-router-dom";
import Navigation from "../pages/Shared/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation />
      <Outlet></Outlet>
      <footer></footer>
    </div>
  );
};

export default Main;
