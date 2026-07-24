import React, { useEffect, useState } from 'react';
import './Home.css';
import herosection from '../../assets/Herosection.png';
import reward from '../../assets/vector-award.png';
import room1 from '../../assets/room1.png';
import resortView from '../../assets/resortView.mp4';
import pic2 from '../../assets/pic2.png'

import { useNavigate } from 'react-router-dom'


import { LuTreePalm } from "react-icons/lu";
import { PiFlowerLotus } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineBed } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { BsGeoAlt } from "react-icons/bs";
import Check from '../Check-Availability/Check';

const Home = () => {

  
   const navigate = useNavigate()
  

  return (
    <div>

      <div style={{
        height: '4.5rem'
      }}></div>

      <div>
        {/* Hero Section */}
        <div id='home-div'>
          <div id='hero-div1'>
            <p>Escape. Relax. Rejuvenate.</p>
            <p id='hero-head'>Experience Luxury Like <i>Never</i> Before </p>
            <p>Serenity Resort & Spa offers the perfect blend of nature, comfort and world-class hospitality.</p>
            <button className='mt-4'>Explore Rooms <i className="bi bi-arrow-right"></i></button>
          </div>


          <div id='hero-div2'>
            <div id='rateing'>
              <img src={reward} alt="" />
              <div>
                <p id='rate'>4.8/5</p>
                <p>from 1200+ guests</p>
              </div>
            </div>
          </div>
        </div>


        {/* Check In Section */}
        <Check/>


      </div>


      {/* About */}
      <div className='about-div'>

        <div className='about-content'>
          <p id='about-up'>About Us</p>
          <p id='about-head'>A Place Where Comfort Meets Nature</p>
          <p>Nestled in the lap of nature, Serenity Resort & Spa is your ideal getaway from the hustle and bustle of city life. We offer premium stay, delicious cuisine and unforgettable experiences.</p>


          <div className='tag-div'>
            <div>
              <div className='tag-out'><LuTreePalm className='tag' /></div>
              <p>Scenic Views</p>
              <span>Breathtaking views of ocean & gardens</span>
            </div>


            <div>
              <div className='tag-out'><GiForkKnifeSpoon className='tag' /></div>
              <p>Scenic Views</p>
              <span>Breathtaking views of ocean & gardens</span>
            </div>


            <div>
              <div className='tag-out'><PiFlowerLotus className='tag' /></div>
              <p>Scenic Views</p>
              <span>Breathtaking views of ocean & gardens</span>
            </div>
          </div>


        </div>


        <div className='video-div'>
          <video
            width="100%"
            autoPlay
            loop
            muted
            playsInline>
            <source src={resortView} type="video/mp4" />
          </video>
        </div>

      </div>


      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />




      {/* Room Section */}
      <div>

        <div className='room-nav'>
          <div className='room-head'>
            <p>ROOMS & SUITES</p>
            <span>Find Your Perfect Stay</span>
          </div>

          <div className='room-btn'>
            <button onClick={() => {navigate('rooms')}}>View All Rooms</button>
          </div>
        </div>

        <div className="home-card-div">

          <div className="home-card">
            <div className='home-card-img'>
              <img src={room1} alt="" />
            </div>
            <div className='home-card-info'>
              <span>Ocean View Suite</span>
              <p><b>$250/</b>night</p>
            </div>
            <div className='ex-detail'>
              <div className='detail'>
                <IoPersonOutline />
                <span>2 Guests</span>
              </div>

              <div className='detail'>
                <MdOutlineBed />
                <span>1 King Bed</span>
              </div>

              <div className='detail'>
                <LuSquareArrowOutUpRight />
                <span>21 m<sup>2</sup></span>
              </div>
            </div>
          </div>



        </div>
      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />


      {/* Resort Review */}
      <div className='resort-review'> 
        <div className='review-cat'>
          <BsPeople className='review-logo'/>
          <div>
            <p>1200+</p>
            <span>Happy Guests</span>
          </div>
        </div>

        <div className='review-cat'>
          <MdOutlineBed className='review-logo'/>
          <div>
            <p>50+</p>
            <span>Luxury Rooms</span>
          </div>
        </div>

        <div className='review-cat'>
          <FaRegStar className='review-logo'/>
          <div>
            <p>4.8/5</p>
            <span>Guest Rating</span>
          </div>
        </div>

        <div className='review-cat'>
          <BsGeoAlt className='review-logo'/>
          <div>
            <p>20+</p>
            <span>Awards Won</span>
          </div>
        </div>

      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />


      {/* Photos */}

      <div>
        <div className='gallery-head'>
          <p>GALLERY</p>
          <span>Moment of Serenity</span>
        </div>

        <div className='gallery-img'>
          <img src={pic2} alt="" />
          <img src={pic2} alt="" />
          <img src={pic2} alt="" />
          <img src={pic2} alt="" />
        </div>

        <div id='gallery-btn'>
          <button onClick={() => {navigate('gallery')}}>View Full Gallery <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>


     
      

    </div>
  )
}

export default Home
