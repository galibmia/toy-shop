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
import MyToys from './pages/MyToys/MyToys';
import UpdateToy from './pages/UpdateToy/UpdateToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://toy-shop-server-nu.vercel.app/toys')
      },
      {
        path: 'toys',
        element: <Toys></Toys>,
        loader: () => fetch('https://toy-shop-server-nu.vercel.app/toys')
      },
      {
        path: 'toys/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`https://toy-shop-server-nu.vercel.app/toys/${params.id}`)
      },
      {
        path: 'addToy',
        element: <AddToys></AddToys>
      },
      {
        path: 'myToys',
        element: <MyToys></MyToys>
      },
      {
        path: 'updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({params}) => fetch(`https://toy-shop-server-nu.vercel.app/toys/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
