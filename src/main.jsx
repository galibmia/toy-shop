import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import Toys from './pages/Toys/Toys';
import ToyDetails from './pages/ToyDetails/ToyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'toys',
        element: <Toys></Toys>
      },
      {
        path: 'toys/:id',
        element: <ToyDetails></ToyDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
