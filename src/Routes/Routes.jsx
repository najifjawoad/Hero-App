import { createBrowserRouter } from "react-router";
import App from "../App";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPages from "../Pages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading...</p>,
    children:[
       {
    index:true,
    element: <Home/>,
    loader:()=>fetch('./appsData.json'),
  },
  {
    path: "/apps",
    element: <Apps/>,
  },
  {
    path: "/installation",
    element: <Installation></Installation>,
  },
  {
    path:'/app/:id',
    errorElement:<ErrorPages></ErrorPages>,
    element:<AppsDetails></AppsDetails>
  }

    ]
  },
  // {
  //   path:'*',
  //   element:<ErrorPages></ErrorPages>
  // } 
  
]);


