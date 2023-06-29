import * as React from "react";
import { useState } from "react";
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css'

function Navbar() {
  const[openLinks,setopenLinks]=useState(false);

  const toggleNavbar=()=>{
    setopenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?"open":"close"}>
        <img src={Logo}/>
        <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}><ReorderIcon/></button>
      </div>
    </div>
  )
}

export default Navbar