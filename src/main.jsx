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
import AddToys from './pages/AddToys/AddToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: 'toys',
        element: <Toys></Toys>
      },
      {
        path: 'toys/:id',
        element: <ToyDetails></ToyDetails>
      },
      {
        path: 'addToy',
        element: <AddToys></AddToys>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
