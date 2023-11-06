import { Link, Outlet } from "react-router-dom";
import Navigation from "../pages/Navigation";
import Container from "../pages/Shared/Container";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FcDataSheet } from "react-icons/fc";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

const Dashboard = () => {
  const [active, setActive] = useState(null);

  const handleItemClick = (item) => {
    setActive(item);
  };
  return (
    <div>
      <Navigation />
      <Container>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center p-5">
            {/* Page content here */}
            <Outlet />
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="p-4 flex flex-col gap-1 w-72 min-h-full bg-[#2B383E] text-white">
              {/* Sidebar content here */}

              <li>
                <Link
                  to="/dashboard/home"
                  onClick={() => handleItemClick("dashboard")}
                  className={
                    active === "dashboard"
                      ? "bg-[#3298EE] hover:bg-[#3298EE]"
                      : "hover:bg-[#435056]"
                  }
                >
                  <AiFillHome />
                  Dashboard Home
                </Link>
              </li>
              <hr className="my-5" />
              <li>
                <Link
                  to="/dashboard/mybiodata"
                  onClick={() => handleItemClick("mybiodata")}
                  className={
                    active === "mybiodata"
                      ? "bg-[#3298EE] hover:bg-[#3298EE]"
                      : "hover:bg-[#435056]"
                  }
                >
                  <BiUserCircle size={20} />
                  My Biodata
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/alluser"
                  onClick={() => handleItemClick("alluser")}
                  className={
                    active === "alluser"
                      ? "bg-[#3298EE] hover:bg-[#3298EE]"
                      : "hover:bg-[#435056]"
                  }
                >
                  <FaUsers />
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/biodata"
                  onClick={() => handleItemClick("biodata")}
                  className={
                    active === "biodata"
                      ? "bg-[#3298EE] hover:bg-[#3298EE]"
                      : "hover:bg-[#435056]"
                  }
                >
                  <FcDataSheet />
                  Biodata
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
