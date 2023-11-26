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
import AllUsers from "./../pages/Dashboard/AllUsers";
import AllBiodataTable from "../pages/Dashboard/AllBiodataTable";
import BiodataInfo from "../pages/Dashboard/BiodataInfo/BiodataInfo";
import AllBiodata from "../pages/AllBiodata";
import CreateBiodata from "../pages/Dashboard/BioForm/CreateBiodata";
import SingleBiodata from "../pages/SingleBiodata";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "biodatainfo",
        element: <BiodataInfo />,
      },
      {
        path: "mybioform",
        element: (
          <PrivateRoute>
            <CreateBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "biodatatable",
        element: <AllBiodataTable />,
      },
      {
        path: "allbiodata",
        element: <AllBiodata />,
      },
      {
        path: "/viewbiodata/:id",
        element: <SingleBiodata />,
        loader: ({ params }) =>
          fetch(`https://matrimony-web-server.vercel.app/biodata/${params.id}`),
      },
    ],
  },
]);
