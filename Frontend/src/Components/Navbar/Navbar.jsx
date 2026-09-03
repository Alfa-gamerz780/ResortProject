import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/logo.png'


const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState('flex');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>{
    const handleResize = () =>{
      if(window.innerWidth <= 1100){
        setToggle('none')
      }
      else{
        setToggle('flex')
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggle() {
    toggle === 'none' ? setToggle('flex') : setToggle('none')
  }

  return (
    <div id='nav-div' className={scrolled ? "active-nav" : ""}>
      <img src={logo} alt="" />
      <ul className= {scrolled ? "scroll-nav-item" : ''} id='nav-ul'
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
        <button id='book-btn' onClick={() => {navigate('rooms'); }}>Book Now</button>
        <button id='nav-toggle'
          onClick={handleToggle}
        ><i className="bi bi-list"></i></button>
      </div>
    </div>
  )
}

export default Navbar
