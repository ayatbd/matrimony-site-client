import { Link, Navigate } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";
import "../pages/css/page.css";
import Container from "./Shared/Container";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const Navigation = () => {
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
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start gap-2">
          <img className="w-12 h-12" src={logo} alt="logo" />
          <p className="text-2xl font-bold">
            <span className="text-[#02788F]">Wedding</span>
            <span className="text-[#ED3284]">Wonders</span>
          </p>
        </div>
        <div className="navbar-center">
          <div className="flex gap-7 items-center justify-between navbar-center">
            <ul>
              <Link className="text-xl">Home</Link>
            </ul>
            <ul>
              <Link to="/about" className="text-xl">
                About Us
              </Link>
            </ul>
            <ul>
              <Link to="/faq" className="text-xl">
                FAQ
              </Link>
            </ul>
            <ul>
              <Link to="/guid" className="text-xl">
                Guide
              </Link>
            </ul>
            <ul>
              <Link to="/contact" className="text-xl">
                Contact
              </Link>
            </ul>
          </div>
        </div>
        {user ? (
          <div className="navbar-end gap-4">
            <button
              onClick={handleLogOut}
              className="text-xl bottom-shadow bg-[#E33283] text-white rounded-full py-2 px-6"
            >
              <Link to="/registration">Sign Out</Link>
            </button>
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
  );
};

export default Navigation;
