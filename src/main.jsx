import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Dashbord from './Components/DashBord/Dashbord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path:"/",
       element:<Home></Home>
      },
      {
        path:"/dashboard",
        element:<Dashbord></Dashbord>
      }
    ]
    
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
