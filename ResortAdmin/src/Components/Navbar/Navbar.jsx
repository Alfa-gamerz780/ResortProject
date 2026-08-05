import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { IoHome,IoBed,IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpeakerNotes } from "react-icons/md";


const Navbar = () => {


  return (
    <div className='navbar-div'>

      <ul>
        <NavLink to={'/'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoHome className='mb-1'/>Home</NavLink>
        <NavLink to={'roomset'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoBed/> Rooms</NavLink>
        <NavLink to={'review'} className={({isActive}) => isActive? "nav-active" : "not-active"}><MdOutlineSpeakerNotes/>Reviews</NavLink>
        <NavLink to={'profile'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoPersonSharp/>Profile</NavLink>
      </ul>
        <button className='bg-danger'>Logout</button>
    </div>
  )
}

export default Navbar
