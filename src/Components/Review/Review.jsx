import React, { useState, useEffect } from "react";
import "./Review.css";

import {
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";

const data = [
  { id: 1, title: "Review 1" },
  { id: 2, title: "Review 2" },
  { id: 3, title: "Review 3" },
  { id: 4, title: "Review 4" },
  { id: 5, title: "Review 5" },
  { id: 6, title: "Review 6" },
  { id: 7, title: "Review 7" },
];

const Review = () => {

  const [start, setStart] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);


  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 576) {
        setCardsPerPage(1);
      } 
      else if (window.innerWidth <= 768) {
        setCardsPerPage(2);
      } 
      else if (window.innerWidth <= 992) {
        setCardsPerPage(3);
      } 
      else {
        setCardsPerPage(4);
      }

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);


  useEffect(() => {

    if (start > data.length - cardsPerPage) {
      setStart(Math.max(0, data.length - cardsPerPage));
    }

  }, [cardsPerPage]);

  const visibleCards = data.slice(start, start + cardsPerPage);

  const next = () => {

    if (start + cardsPerPage < data.length) {
      setStart(start + cardsPerPage);
    }

  };

  const prev = () => {

    if (start - cardsPerPage >= 0) {
      setStart(start - cardsPerPage);
    } else {
      setStart(0);
    }

  };

  return (
    <div>

      <div style={{ height: "6rem" }}></div>

      <div className="review-hero-div">
        <div className="review-hero-txt">
          <span>GUESTS REVIEW</span>
          <br />

          <b>
            Stories From Our Guests,
            <span> Memories for a Lifetime</span>
          </b>

          <p>
            Real experience, honest words, see why guests love their stay at
            Armonia Resort & Spa.
          </p>
        </div>
      </div>

      <div className="review-card-div">

        {visibleCards.map((item) => (

          <div className="review-card" key={item.id}>

            <div className="review-star mb-4">
              <TiStarFullOutline className="star" />
              <TiStarFullOutline className="star" />
              <TiStarFullOutline className="star" />
              <TiStarHalfOutline className="star" />
            </div>

            <p>{item.title}</p>

            <hr />

            <p><b>Atharv Keshari</b></p>

            <div className="card-date-stayed">
              <FaCalendarAlt />
              <span>Stayed January 2026</span>
            </div>

          </div>

        ))}

      </div>

      <div className="review-card-btn">

        <button
          onClick={prev}
          disabled={start === 0}
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={next}
          disabled={start + cardsPerPage >= data.length}
        >
          <FaArrowRight />
        </button>

      </div>

      <div className="review-form-section">

        <div className="review-form">
          <h2>Share Your Experience</h2>
          <div className="review-inp">

            <div className="review-inp-info">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <textarea placeholder="Your Experience"></textarea>

          </div>

          <div className="review-inp-star">
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
          </div>

          <button type="button">Submit</button>

        </div>


        <div className="review-form-img">
          <p>Relax,</p>
          <p>Refresh,</p>
          <p>Reconnect...</p>
        </div>
      </div>

    </div>
  );
};

export default Review;