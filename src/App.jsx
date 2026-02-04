
import React from 'react'
import Signup from './pages/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Blog from './pages/Blog'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import CreateBlog from './pages/CreateBlog'
import YourBlog from './pages/YourBlog'
import Comments from './pages/Comments'
import UpdateBlog from './pages/UpdateBlog'

const router = createBrowserRouter([
   {
    path: "/",
    element: <><Navbar/><Home /><Footer/></>
  },
  {
    path: "/blogs",
    element: <><Navbar/><Blog /><Footer/></>
  },
  {
    path: "/about",
    element: <><Navbar/><About /><Footer/></>
  },
 

 
 
   {
    path: "/signup",
    element: <><Navbar/><Signup /></> 
  },
  {
    path: "/login",
    element: <><Navbar/><Login /></>
  },
   {
    path: "/dashboard",
    element: <><Navbar /><Dashboard /></>,
    children:[
      {
       path:"Profile",
      element:<Profile/>
      },
       {
        path: "write-blog",
        element:<CreateBlog/>
      },
        {
        path: "your-blog",
        element:<YourBlog/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
        {
        path: "write-blog/:blogId",
        element: <><UpdateBlog /></>
      },
    ]
  },
])
const App = () => {
  return (
     <>
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
