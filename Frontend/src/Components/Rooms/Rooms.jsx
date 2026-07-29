import React from 'react'
import './Rooms.css'
import room1 from '../../assets/room1.png';
import Check from '../Check-Availability/Check'

import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


import { RiPriceTag2Line, RiPriceTag3Fill } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaWineGlass } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";


const Rooms = () => {

  
  const rooms = useSelector((state) => state.room.rooms);
  const navigate = useNavigate();

  return (
    <div>


      <div className='room-hero-div'>

        <div className='room-hero-txt'>
          <span><b>Rooms & Suites</b></span>
          <p>Stay in Comfort, Wake in <span>Paradise</span></p>
          <span style={{
            color: 'black',
          }}>Discover a collection of elegantly designed rooms and suites that blend modern luxury with natural beauty. Whether it's a romantic escape or a family vacation, have the perfect stay for you.</span>
        </div>

        <div className='room-hero-img'>
          <div id='room-hero-tag'>
            <span>Your perfect escape</span>
            <br />
            <p><b>Awaits you</b></p>
          </div>
        </div>

      </div>


      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />

      <div>
        <Check />
      </div>


      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />

      <div>

        <div id='room-card-section'>
          <h2>Explore Our Room</h2>

          <div className='room-card-div'>


            {
              rooms?.map((room) => {
                return (
                  <div className="room-card" key={room.id} onClick={() => {
                    navigate(`../roomView/${room.id}`)
                  }}>


                    <div className='room-card-img'>
                      <img src={room.image} alt="" />
                    </div>

                    <div style={{
                      padding: '0 1.5rem 1rem'
                    }}>

                      <div className='room-card-info'>
                        <span>{room.title}</span>
                        <p><b>{room.price}/</b>night</p>
                      </div>


                      <div className='room-ex-detail'>
                        <div className='room-detail'>
                          <IoPersonOutline />
                          <span>{room.guest} Guests</span>
                        </div>

                        <div className='room-detail'>
                          <MdOutlineBed />
                          <span>{room.bed}</span>
                        </div>

                        <div className='room-detail'>
                          <LuSquareArrowOutUpRight />
                          <span>{room.area} m<sup>2</sup></span>
                        </div>
                      </div>

                      <p className='room-dec'>{room.dec}.</p>

                      <button>View Details <i className="bi bi-arrow-right"></i></button>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>

      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />


      <div className='benefits-div'>

        <div id='benefit-div-txt'>

          <div className='benefit-head'>
            <div>
              <RiPriceTag3Fill id='dis-tag' />
            </div>
            <div>
              <span>Exclusive Benefits</span>
              <p>Book Direct & Save More</p>
            </div>
          </div>


          <div className='benefit-grid'>


            <div className='benefit-g-item'>
              <div className='benefit-g-tag'>
                <RiPriceTag2Line />
              </div>
              <div>
                <b>Best Price</b><br />
                <span>Guarantee</span>
              </div>
            </div>


            <div className='benefit-g-item'>
              <div className='benefit-g-tag'>
                <MdOutlineFreeBreakfast />
              </div>
              <div>
                <b>Free Breakfast</b><br />
                <span>Every Morning</span>
              </div>
            </div>

            <div className='benefit-g-item'>
              <div className='benefit-g-tag'>
                <FaCalendarCheck />
              </div>
              <div>
                <b>Late Checkout</b><br />
                <span>(Subject to availability)</span>
              </div>
            </div>

            <div className='benefit-g-item'>
              <div className='benefit-g-tag'>
                <FaWineGlass />
              </div>
              <div>
                <b>Welcome Drink</b><br />
                <span>On Arrival</span>
              </div>
            </div>


          </div>


        </div>

        <div id='benefit-vr'>

        </div>

        <div className='benefit-book-txt'>
          <b>Ready to experience Armonia?</b>
          <p>Book your stay directly with us and enjoy exclusive perks and unforgettable memories</p>
          <button>Book Your Stay <i className="bi bi-arrow-right"></i></button>
        </div>

      </div>


    </div>
  )
}

export default Rooms
