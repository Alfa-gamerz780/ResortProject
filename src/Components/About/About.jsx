import React from 'react'
import './About.css'

import abImg from '../../assets/about-img.png'

import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { PiSunHorizonBold } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { GiLotus } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { RiShieldStarFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { MdOutlineBed } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";




const About = () => {
  return (
    <div>

      <div style={{
        height: '6.2rem'
      }}></div>

      <div className="about-div">
        <div className='about-p-img'>
          <div id='badge-about'>
            <FaCanadianMapleLeaf id='leaf' />
            <p>Armonia</p>
            <span>Promise</span>
          </div>
        </div>
        <div className='about-section'>
          <span className='about-h-upper'>About Us</span>
          <p className='about-h-section'>Where Luxury Meets <span>Nature</span></p>
          <hr style={{
            width: '100%',
            justifySelf: 'center',
            color: '#C89B3C'
          }} />
          <p>At Armonia Resort & Spa, we blend timeless elegance with the raw beauty of nature to create unforgettable experiences. From breathtaking ocean views to world-class amenities, every detail is designed for your ultimate comfort and relaxation.</p>
          <p>Whether you're here for a romantic escape, a family getaway, or pure tranquility, Armonia is your sanctuary of luxury and serenity.</p>
        </div>

      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />


      <div className='facilities-div'>

        <div className='resort-facilities'>
          <div className='faci-logo'>
            <PiSunHorizonBold />
          </div>
          <p>Ocean View</p>
          <span>Wake up to endless horizons and the soothing sound of waves.</span>
        </div>
        <div className='resort-facilities'>
          <div className='faci-logo'>
            <MdDinnerDining />
          </div>
          <p>Fine Dining</p>
          <span>Savor exquisite cuisine crafted by world-class chefs.</span>
        </div>
        <div className='resort-facilities'>
          <div className='faci-logo'>
            <GiLotus />
          </div>
          <p>Luxury Spa</p>
          <span>Rejuvenate your body, mind, and soul with our holistic treatment.</span>
        </div>
        <div className='resort-facilities'>
          <div className='faci-logo'>
            <LiaSwimmingPoolSolid />
          </div>
          <p>Infinity Pool</p>
          <span>Unwind in our infinity pool with panoramic ocean views.</span>
        </div>


      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />

      <div className='exp-resort-div'>

        <div className='exp-resort' >
          <div className='exp-resort-logo'>
            <RiShieldStarFill/>
          </div>
          <p>15<b>+</b></p>
          <span>Years Experience</span>
        </div>

        <div className='exp-resort' >
          <div className='exp-resort-logo'>
            <GoPeople/>
          </div>
          <p>2500<b>+</b></p>
          <span>Happy Guests</span>
        </div>

        <div className='exp-resort' >
          <div className='exp-resort-logo'>
            <MdOutlineBed/>
          </div>
          <p>75</p>
          <span>Luxury Rooms</span>
        </div>

        <div className='exp-resort' >
          <div className='exp-resort-logo'>
            <IoStarOutline/>
          </div>
          <p>4.8</p>
          <span>Guest Rating</span>
        </div>

      </div>


    </div>
  )
}

export default About
