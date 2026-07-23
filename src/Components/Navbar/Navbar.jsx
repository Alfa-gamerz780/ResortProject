import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo.png'


const Navbar = () => {
  const [toggle, setToggle] = useState('flex');

  function handleToggle() {
    toggle === 'none' ? setToggle('flex') : setToggle('none')
  }

  return (
    <div id='nav-div' className={scroll ? "active-nav" : ""}>
      <img src={logo} alt="" />
      <ul className= {scroll ? "scroll-nav-item" : ''} id='nav-ul'
      style={{
        display: `${toggle}`
      }}>
        <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Home</NavLink>
        <NavLink to={'about'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>About</NavLink>
        <NavLink to={'rooms'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Rooms</NavLink>
        <NavLink to={'amenities'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Amenities</NavLink>
        <NavLink to={'gallery'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Gallery</NavLink>
        <NavLink to={'review'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Review</NavLink>
        <NavLink to={'contact'} className={({ isActive }) => isActive ? "active-link" : "not-active"}>Contact</NavLink>

      </ul>
      <div id='nav-btns'>
        <button id='book-btn'>Book Now</button>
        <button id='nav-toggle'
          onClick={handleToggle}
        ><i className="bi bi-list"></i></button>
      </div>
    </div>
  )
}

export default Navbar
