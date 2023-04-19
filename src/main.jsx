//Importing Modules
import React from 'react'
import ReactDOM from 'react-dom/client'

//Importing CSS Sheets
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Articles from './pages/articles';

//Importing Functions
import { getAllUsers } from '../backend/users';
const users = await getAllUsers(); //Gets the objects from all users in db

const router = createBrowserRouter([
  {
    path: "/",
    element: <Articles />,
  },
  ...users.map((user, index) => ({
    path: `/user/${user.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`,
    element: <Articles user = {user} />,
  })),
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
