import React from 'react';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductPage from './Components/ProductPage';
import Profile from './Components/Profile';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <Navbar/>
    // <div className='w-screen border-2 border-red-600'>
    //    <Navbar/>
    //    <Outlet/>
    // </div>
  )
}

export default App

// https://github.com/saurabhbansal2443/MernWeekdays3-/commits/main/