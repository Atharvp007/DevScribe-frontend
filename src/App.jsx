
import React from 'react'
import Signup from './pages/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Blog from './pages/Blog'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
])
const App = () => {
  return (
     <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
