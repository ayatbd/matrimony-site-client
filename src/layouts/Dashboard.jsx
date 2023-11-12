import { Link, Outlet } from "react-router-dom";
import Navigation from "../pages/Navigation";
import Container from "../pages/Shared/Container";
import { IoIosCreate } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FcDataSheet } from "react-icons/fc";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import profile from "../../src/assets/images/profile.png";

const Dashboard = () => {
  const [active, setActive] = useState(null);
  const { user } = useAuth();

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
            <div className="pt-3 hidden md:block bg-[#2B383E]">
              <img
                className="w-[150px] h-[150px] rounded-full mx-auto"
                src={user.photoURL ? user.photoURL : profile}
                alt="Image is not available"
              />
              <h1 className="text-lg text-white font-extrabold text-center font-kanit">
                {user.displayName ? user.displayName : "No Name found"}
              </h1>
              <p className="text-xs text-white font-bold font-kanit text-center">
                {user?.email}
              </p>
            </div>
            <ul className="p-4 flex flex-col gap-1 w-72 min-h-full bg-[#2B383E] text-white">
              {/* Sidebar content here */}

              {/* <li>
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
              </li> */}
              <hr className="my-5" />
              <li>
                <Link
                  to="/dashboard/createbiodata"
                  onClick={() => handleItemClick("createbiodata")}
                  className={
                    active === "createbiodata"
                      ? "bg-[#3298EE] hover:bg-[#3298EE]"
                      : "hover:bg-[#435056]"
                  }
                >
                  <IoIosCreate size={20} />
                  Create Biodata
                </Link>
              </li>
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
                  All Biodata
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
