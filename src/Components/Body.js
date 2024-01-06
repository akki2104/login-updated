import React from 'react'
import { Router, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from './Login';

    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      
    ]);
const Body = () => {
  return (
    <div><RouterProvider router={appRouter}/></div>
  )
}

export default Body