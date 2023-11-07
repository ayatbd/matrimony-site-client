import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginWithPopUp = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User logged in successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          Navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="relative py-24 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <h2 className="mb-8 text-2xl text-[#530E29] font-bold">
                  Sign In to Your Account
                </h2>
                <form className="mt-6" action="#" method="POST">
                  <div>
                    <label className="block text-[#530E29]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                      required
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-[#530E29]">Password</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter Password"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                      focus:bg-white focus:outline-none"
                      required
                    />
                  </div>

                  <div className="text-right mt-2">
                    <Link className="text-sm font-semibold text-[#530E29] hover:text-blue-700 focus:text-blue-700">
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="w-full bottom-shadow block bg-gradient-to-r from-[#493240] to-[#FF0099] hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-full
                    px-4 py-3 mt-6"
                  >
                    Sign In
                  </button>
                </form>
              </div>
              <div className="divider my-6">OR</div>
              <div className="grid space-y-4">
                <button
                  onClick={handleLoginWithPopUp}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
       hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-[#530E29] text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
                <p className="text-center text-black mt-7">
                  Don't have an account?
                </p>
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                           hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <Link to="/registration">
                      <span className="block w-max font-semibold tracking-wide text-[#530E29] text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        + Create an Account
                      </span>
                    </Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
