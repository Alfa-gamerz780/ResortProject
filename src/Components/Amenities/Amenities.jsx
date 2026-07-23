import React from 'react'
import './Amenities.css'
import poolImg from "../../assets/poolAmenity.png"
import spaImg from "../../assets/spaImg.png"
import dinnerImg from '../../assets/dinnerImg.png'
import gymImg from '../../assets/gymImg.png'
import beachImg from '../../assets/beachImg.png'
import divingImg from '../../assets/divingImg.png'
import kidClubImg from '../../assets/kidClubImg.png'
import serviceImg from '../../assets/service.png'


import { FaSwimmingPool,FaUmbrellaBeach  } from "react-icons/fa";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { MdOutlineScubaDiving } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { RiServiceBellLine } from "react-icons/ri";


const Amenities = () => {
  return (
    <div>

      <div style={{
        height: '6rem'
      }}></div>


      <div className='amenities-hero-div'>

        <div className='amenities-hero-txt'>
          <span>AMENITIES</span><br />
          <b>Indulge in World Class <span>Experiences</span></b>
          <p>At Armonia Resort & Spa, every detail is designed to elevate your stay. From luxurious comfort to unforgettable experiences, we offer a wide range of amenities for your perfect getaway.</p>
          <button>Explore Our Resort <i className="bi bi-arrow-right"></i></button>

        </div>

      </div>

        <div className='amenities-card-head'>
          <span>Our Amenities</span>
          <p>Designed for <span>Your Comfort</span></p>
        </div>

      <div className='amenities-card-div'>

        <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${poolImg})`,
          }}>
            
              <FaSwimmingPool className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Infinity Pool</p>
            <span>Take a dip in our pool overlooking the ocean and soak in the breathing views.</span>

          </div>
        </div>

         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${spaImg})`,
          }}>
            
              <PiFlowerLotusDuotone className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Luxury Spa </p>
            <span>Rejuvenate your body and mind with our signature spa therapies and wellness treatments.</span>

          </div>
        </div>


         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${dinnerImg})`,
          }}>
            
              <GiKnifeFork className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Fine Dining</p>
            <span>Savor exquisite cuisines crafted by world-class chefs using the finest ingredients.</span>

          </div>
        </div>


         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${gymImg})`,
          }}>
            
              <BiDumbbell className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Fitness Center</p>
            <span>Stay fit on vacation with our fully equipped modern gymnasium.</span>

          </div>
        </div>
      
      <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${beachImg})`,
          }}>
            
              <FaUmbrellaBeach className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Beach Access</p>
            <span>Enjoy private beach access and experience the beauty of pristine waters.</span>

          </div>
        </div>

         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${divingImg})`,
          }}>
            
              <MdOutlineScubaDiving className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Water Activity</p>
            <span>From snorkeling to jet skiing experience thrilling water adventures.</span>

          </div>
        </div>


         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${kidClubImg})`,
          }}>
            
              <TbMoodKid className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Kids Club</p>
            <span>A safe and fun-filled space where kids create memories with exciting activities.</span>

          </div>
        </div>


         <div className='amenity-card'>


          <div className='amenity-img' style={{
            backgroundImage: `url(${serviceImg})`,
          }}>
            
              <RiServiceBellLine className='amenity-logo'/>

          </div>

          <div className='amenity-txt'>

            <p>Concierge Service</p>
            <span>Our concierge team is always ready to assist you with personalized services.</span>

          </div>
        </div>
      
      
      </div>





    </div>
  )
}

export default Amenities
