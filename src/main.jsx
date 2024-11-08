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
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBook from './Components/ListedBook/ListedBook.jsx';

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
       path:"/listedBook",
       element:<ListedBook></ListedBook>,
       loader:()=>fetch('data.json')
      },
      {
        path:"/book/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('data.json')
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
