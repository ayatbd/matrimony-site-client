import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";
import profile from "../assets/images/user.png";
import "../pages/css/page.css";
import Container from "./Shared/Container";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
// import { useState } from "react";
const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User logged out successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="nav-gradient">
      <Container>
        <div className="navbar flex items-center justify-between bg-base-100">
          <div className="navbar-start gap-2">
            <img className="w-12 h-12" src={logo} alt="logo" />
            <p className="text-2xl font-bold">
              <span className="text-[#02788F]">Wedding</span>
              <span className="text-[#ED3284]">Wonders</span>
            </p>
          </div>
          <div>
            <ul className="flex gap-7 items-center justify-between navbar-center">
              <li>
                <Link to="/" className="text-xl">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xl">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-xl">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/guid" className="text-xl">
                  Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xl">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="navbar-end gap-2">
              {/* <button
                onClick={handleLogOut}
                className="text-xl bottom-shadow bg-[#E33283] text-white rounded-full py-2 px-6"
              >
                <Link to="/registration">Sign Out</Link>
              </button> */}

              {/* <button className="text-xl bottom-shadow bg-[#E33283] text-white rounded-full py-2 px-6">
                <Link to="/dashboard/home">Dashboard</Link>
              </button> */}
              <div className="dropdown dropdown-hover">
                {/* <div
                  onClick={() => setIsOpen(!isOpen)}
                  tabIndex={0}
                  className="btn mr-4 btn-circle avatar tooltip ml-2"
                >
                  <img
                    className="w-10 rounded-full border-2 p-1"
                    src={user.photoURL ? user.photoURL : profile}
                  />
                </div> */}
                <label tabIndex={0} className="btn m-1 btn-circle">
                  <img
                    className="rounded-full border-2"
                    src={user.photoURL ? user.photoURL : profile}
                  />
                </label>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1"
                    id="headlessui-menu-items-117"
                    role="menu"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                        {user && user.email}
                      </p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/biodatainfo"
                        tabIndex="0"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        My Biodata
                      </Link>
                      <Link
                        to="/mybioform"
                        tabIndex="0"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Create Biodata
                      </Link>
                      <Link
                        href="javascript:void(0)"
                        tabIndex="1"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Copy Biodata Link
                      </Link>
                      <Link
                        href="javascript:void(0)"
                        tabIndex="1"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Delete or Hide Biodata
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link
                        onClick={handleLogOut}
                        href="javascript:void(0)"
                        tabIndex="3"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
                {/* {isOpen && (
                  <div
                    className="w-[250px] hidden md:block z-10 h-fit absolute rounded-md shadow-md hover:shadow-2xl bg-slate-500 py-8 px-5
                      -top-0 right-0 md:left-auto md:top-12"
                  >
                    <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-primary overflow-hidden">
                      <img
                        src={user.photoURL ? user.photoURL : profile}
                        className="w-[120px] h-[120px] mx-auto rounded-full"
                        alt="profile"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center  mt-5 text-gray-900">
                      <h1 className="text-base font-bold">
                        Name: {user?.displayName}
                      </h1>
                      <p className="text-xs my-3">Email: {user?.email}</p>
                      <button
                        className="text-white flex justify-center items-center gap-3 font-medium py-2 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700"
                        onClick={handleLogOut}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          ) : (
            <div className="navbar-end gap-4">
              <button className="text-xl bottom-shadow bg-[#E33283] text-white rounded-full py-2 px-6">
                <Link to="/registration">Registration</Link>
              </button>
              <button className="text-xl bottom-shadow text-[#E33283] py-2 px-6 rounded-full border border-[#E33283]">
                <Link to="/signin">Sign In</Link>
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
