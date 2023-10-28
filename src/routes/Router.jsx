import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
