import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';
import Cart from './Components/Cart.jsx';
import ProductPage from './Components/ProductPage.jsx';

let AppRouter=createBrowserRouter([
  {
    path:"/",
    element :<App/>,
    children:[
      {path:"/",element : <Home/>},
      {path:"/profile",element:<Profile></Profile>},
      {path:"/cart",element:<Cart></Cart>},
      {path:"/productpage",element:<ProductPage></ProductPage>},

    ],
  },
  
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}/>
)
