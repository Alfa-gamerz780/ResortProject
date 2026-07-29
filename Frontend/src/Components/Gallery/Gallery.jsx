import React from 'react'
import './Gallery.css'
import { GrGallery } from "react-icons/gr";

import imgRoom from '../../assets/room4.png'
import imgRoom2 from '../../assets/room5.png'
import imgRoom3 from '../../assets/room6.png'
import imgRoom4 from '../../assets/room7.png'




const Gallery = () => {
  return (
    <div >
      <div style={{
        height: '6rem'
      }}></div>

      <div className='gallery-hero-div mb-5' >
        <span style={{
          fontWeight: "bold",
          borderBottom: "3px solid #C89B3C"
        }}>GALLERY</span>
        <b>Moment of Luxury Captured <span>Beautifully</span></b>
        <p>Explore the beauty of Armonia Resort & Spa Through our curated gallery.</p>
        <button> <GrGallery style={{
          color: '#C89B3C'
        }} /> View All Photos </button>
      </div>

      <hr style={{
        width: '90%',
        justifySelf: 'center',
        color: '#C89B3C'
      }} />

      <div className='gallery-img-div'>

        <div className='gallery-img-head'>
          <h3>Resort Views</h3>
          <a href="">View All<i className="bi bi-arrow-right"></i> </a>
        </div>


        <div className='gallery-img-grid mt-3 mb-5'>
          <img src={imgRoom} alt="" />
          <img src={imgRoom} alt="" />
          <img src={imgRoom} alt="" />
          <img src={imgRoom} alt="" />
        </div>


      </div>


      <div className='gallery-img-div'>

        <div className='gallery-img-head'>
          <h3>Resort Views</h3>
          <a href="">View All<i className="bi bi-arrow-right"></i> </a>
        </div>


        <div className='gallery-img-grid mt-3 mb-5'>
          <img src={imgRoom2} alt="" />
          <img src={imgRoom2} alt="" />
          <img src={imgRoom2} alt="" />
          <img src={imgRoom2} alt="" />
        </div>


      </div>



      <div className='gallery-img-div'>

        <div className='gallery-img-head'>
          <h3>Resort Views</h3>
          <a href="">View All<i className="bi bi-arrow-right"></i> </a>
        </div>


        <div className='gallery-img-grid mt-3 mb-5'>
          <img src={imgRoom3} alt="" />
          <img src={imgRoom3} alt="" />
          <img src={imgRoom3} alt="" />
          <img src={imgRoom3} alt="" />
        </div>


      </div>



      <div className='gallery-img-div'>

        <div className='gallery-img-head'>
          <h3>Resort Views</h3>
          <a href="">View All<i className="bi bi-arrow-right"></i> </a>
        </div>


        <div className='gallery-img-grid mt-3 mb-5'>
          <img src={imgRoom4} alt="" />
          <img src={imgRoom4} alt="" />
          <img src={imgRoom4} alt="" />
          <img src={imgRoom4} alt="" />
        </div>


      </div>


    </div>
  )
}

export default Gallery
