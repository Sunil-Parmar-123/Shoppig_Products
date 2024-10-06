import React from 'react'
import Home from './Home'
import Navbarr from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbarr/>
      <Outlet/>
    </div>
  )
}

export default App
