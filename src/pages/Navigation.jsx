import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";
import profile from "../assets/images/user.png";
import "../pages/css/page.css";
import Container from "./Shared/Container";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "./../hooks/useAdmin";
import useBiodata from "../hooks/useBiodata";
import { useEffect, useState } from "react";
const Navigation = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [biodatas, , isLoading] = useBiodata();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (user && !isLoading) {
      const isUserSubmitted = biodatas.some(
        (data) => data.userEmail === user.email
      );
      setSubmitted(isUserSubmitted);
    }
  }, [biodatas, isLoading, user]);

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
                  <img className="rounded-full" src={profile} />
                </label>
                <div className="opacity-0 z-50 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
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
                      {isAdmin && (
                        <Link
                          to="/biodatatable"
                          className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        >
                          All Biodata Table
                        </Link>
                      )}
                      {isAdmin && (
                        <Link
                          to="/allusers"
                          className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        >
                          All user
                        </Link>
                      )}

                      {!submitted ? (
                        <Link
                          to="/mybioform"
                          className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        >
                          Create Biodata
                        </Link>
                      ) : (
                        <Link
                          to="/biodatainfo"
                          className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        >
                          My Biodata
                        </Link>
                      )}
                      <Link className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
                        Copy Biodata Link
                      </Link>
                      <Link className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
                        Delete or Hide Biodata
                      </Link>
                    </div>
                    <div className="py-1">
                      <Link
                        onClick={handleLogOut}
                        className="text-gray-700 hover:bg-gray-100 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                </div>
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
