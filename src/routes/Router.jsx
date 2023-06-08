import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Main from "../Layout/Main";
import Instructors from "../pages/Instructors/Instructors";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup/>
        },
        {
          path: '/instructors',
          element: <Instructors/>
        },

      ]
    },
  ]);