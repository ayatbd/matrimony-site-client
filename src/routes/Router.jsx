import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import Guide from "../pages/Guide";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import AllUsers from "./../pages/Dashboard/AllUsers";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Biodata from "../pages/Dashboard/Biodata";
import MyBioForm from "../pages/Dashboard/BioForm/MyBioForm";
import CreateMyBio from "../pages/Dashboard/CreateMyBio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "guid",
        element: <Guide />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "alluser",
        element: <AllUsers />,
      },
      {
        path: "biodata",
        element: <Biodata />,
      },
      {
        path: "mybiodata",
        element: <MyBioForm />,
      },
      {
        path: "createbiodata",
        element: <CreateMyBio />,
      },
    ],
  },
]);
