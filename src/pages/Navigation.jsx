import { Link, Navigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      <Menu isOpen={isMenuOpen} onStateChange={handleMenuStateChange}>
        {/* Menu content */}
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/guid" onClick={closeMenu}>
            Guide
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </Menu>
      <Container>
        <div className="navbar flex items-center justify-between bg-base-100">
          <div className="md:hidden navbar-start"></div>
          <div className="navbar-center gap-1">
            <img className="md:w-10 md:h-10 w-8 h-8" src={logo} alt="logo" />
            <p className="md:text-2xl text-xl font-bold">
              <span className="text-[#02788F]">Wedding</span>
              <span className="text-[#ED3284]">Wonders</span>
            </p>
          </div>
          <div className="hidden md:inline navbar-center">
            <ul className="flex gap-7 items-center justify-between ">
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
              <div className="dropdown dropdown-hover">
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
            <div className="navbar-end">
              <button className="md:text-xl bottom-shadow text-[#E33283] py-[6px] md:py-2 px-4 md:px-6 rounded-full border border-[#E33283]">
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
