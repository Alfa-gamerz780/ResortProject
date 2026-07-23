import React, { useState } from 'react'
import './Review.css'


import { FaCalendarAlt, FaArrowLeft ,FaArrowRight} from "react-icons/fa";
import { TiStarHalfOutline, TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const data = [
  { id: 1, title: "Room 1" },
  { id: 2, title: "Room 2" },
  { id: 3, title: "Room 3" },
  { id: 4, title: "Room 4" },
  { id: 5, title: "Room 5" },
  { id: 6, title: "Room 6" },
  { id: 7, title: "Room 7" },
];
const Review = () => {

  const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<TiStarFullOutline key={i} className="star" />);
    } else if (rating >= i - 0.5) {
      stars.push(<TiStarHalfOutline key={i} className="star" />);
    } else {
      stars.push(<TiStarOutline key={i} className="star" />);
    }
  }

  return stars;
};


  const [start, setStart] = useState(0);

  const visibleCards = data.slice(start, start + 4);

  const next = () => {
    if (start < data.length - 4) {
      setStart(start + 1);
    };
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - 1);
    };
  };




  return (
    <div >

      <div style={{
        height: '6rem'
      }}></div>



      <div className='review-hero-div'>
        <div className='review-hero-txt'>

          <span>GUESTS REVIEW</span><br />
          <b>Stories From Our Guests, <span>Memories for a Lifetime</span></b>
          <p>Real experience, honest words, see why guests love their stay at Armonia Resort & Spa.</p>
        </div>

      </div>


      <div className='review-card-div'>

        {
          visibleCards.map((item) => {
            return (
              <div className='review-card' key={item.id}>

                <div className='review-star mb-4'>
                  <TiStarFullOutline className='star' />
                  <TiStarFullOutline className='star' />
                  <TiStarFullOutline className='star' />
                  <TiStarHalfOutline className='star' />
                </div>


                <p>{item.title}</p>

                <hr />

                <p><b>Atharv Keshari</b></p>
                <div className='card-date-stayed'>
                  <FaCalendarAlt /><span>Stayed January 2026</span>
                </div>
              </div>
            );
          })}



      </div>


      <div className='review-card-btn'>
        <button onClick={prev}><FaArrowLeft/></button>
        <button onClick={next}><FaArrowRight /></button>
      </div>


      <form className='review-form'>
        <div>

        </div>
          <input type="text" placeholder='Your Name'/>

          <textarea name="" id="" placeholder='Your Experience'></textarea>
      </form>


    </div>
  )
}

export default Review
