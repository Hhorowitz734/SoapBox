//Importing Modules
import React from 'react'
import ReactDOM from 'react-dom/client'

//Importing Pages
import Home from './pages/home';

//Importing CSS Sheets
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Articles from './pages/articles';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
