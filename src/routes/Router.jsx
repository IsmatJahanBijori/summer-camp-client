import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Main from "../Layout/Main";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddACLass from "../pages/Dashboard/Instructor/AddACLass/AddACLass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";

  
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
        {
          path: '/classes',
          element: <Classes/>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'manageClasses',
          element: <ManageClasses/>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers/>
        },
        {
          path: 'addClass',
          element: <AddACLass/>
        },
        {
          path: 'myClasses',
          element: <MyClasses/>
        },
        {
          path: 'mySelectedClasses',
          element: <MySelectedClasses/>
        },
        {
          path: 'myEnrolledClasses',
          element: <MyEnrolledClasses/>
        },
      ]
    }
  ]);