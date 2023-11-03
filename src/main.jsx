import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Main from "./Pages/Home.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Categories from "./Pages/Categories.jsx";
import Search from "./Pages/Search.jsx";
import SearchResults from "./Pages/SearchResults.jsx";


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:"/home",
    element:<Main/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/categories",
    element:<Categories/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/search",
    element:<Search/>,
    errorElement:<ErrorPage/>,
    // children:[
    //   {
    //     path:"search/:query",
    //     element:<SearchResults/>
    //   }
    // ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
