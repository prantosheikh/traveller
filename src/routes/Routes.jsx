import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Booking from "../pages/Booking/Booking";
import Destinations from "../pages/Destinations/Destinations";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      // errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home />,
          },
          
          {
            path: "/signup",
            element: <SignUp />
          },
          {
            path: "/login",
            element: <Login />
          },
          {
            path: "/about",
            element: <AboutUs/>
          },
          {
            path: "/booking/:id",
            element: <Booking/>
          },
          {
            path: "/destinations/:id",
            element: <Destinations/>
          }
      ]
    },
  ]);