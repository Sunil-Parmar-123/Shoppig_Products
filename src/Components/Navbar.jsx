import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { useSelector } from 'react-redux';


function Navbarr() {

  const item = useSelector((state) => state.cartItems);
  console.log(item);

  return (
   <header>
      <div className="links">
        <Link to="/">
        <h1>Shopping</h1>
        </Link>
        <Link className='link' to="/addCartDetail">
        <div className="count">{item.reduce((accumleter,cartitem)=>accumleter+cartitem.quantity,0)}</div>
        <div className="icon">
          <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Link>
      </div>
   </header>
  )
}

export default Navbarr
