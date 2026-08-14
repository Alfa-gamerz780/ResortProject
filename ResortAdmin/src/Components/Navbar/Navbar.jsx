import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { IoHome,IoBed,IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpeakerNotes } from "react-icons/md";


const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState('flex');
  const [winSize, setWinSize] = useState(true);

  useEffect(() =>{
    const handleResize = () =>{
      if(window.innerWidth <= 1100){
        setToggle('none')
        setWinSize(false)
      }
      else{
        setToggle('flex')
        setWinSize(true)
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
    <div className='navbar-div'>

      <ul
      id='nav-ul' 
      style={{
        display: `${toggle}`
      }}>
        <NavLink to={'/'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoHome className='mb-1'/>Home</NavLink>
        <NavLink to={'roomset'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoBed/> Rooms</NavLink>
        <NavLink to={'review'} className={({isActive}) => isActive? "nav-active" : "not-active"}><MdOutlineSpeakerNotes/>Reviews</NavLink>
        <NavLink to={'profile'} className={({isActive}) => isActive? "nav-active" : "not-active"}><IoPersonSharp/>Profile</NavLink>
        {
          (winSize == true)? "" : <button className='bg-danger'>Logout</button>
        }
      </ul>
      {
        (winSize == true)? <button className='bg-danger'>Logout</button> : ""

      }
        <button id='nav-toggle'
          onClick={handleToggle}
        ><i className="bi bi-list"></i></button>
    </div>
  )
}

export default Navbar
