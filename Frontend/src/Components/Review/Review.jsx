import React, { useState, useEffect } from "react";
import "./Review.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  addReview,
  getReview
} from "../../features/ReviewSlice";

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

const Review = () => {

  const reviewShow = useSelector(
    (state) => state.review.reviews
  );

  const [start, setStart] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ADD REVIEW
  const onSubmit = async (data) => {
    try {

      await dispatch(addReview(data)).unwrap();

      toast.success("Review Added Successfully");

      reset();

    } catch (error) {

      toast.error("Something Went Wrong");

    }
  };

  // GET REVIEWS
  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);


  // RESPONSIVE CARDS
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
      else if (window.innerWidth <= 1932) {
        setCardsPerPage(4);
      }
      else {
        setCardsPerPage(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);


  // PREVENT INVALID START INDEX
  useEffect(() => {

    if (start > reviewShow.length - cardsPerPage) {

      setStart(
        Math.max(
          0,
          reviewShow.length - cardsPerPage
        )
      );
    }

  }, [cardsPerPage, start, reviewShow.length]);


  const visibleCards = reviewShow.slice(
    start,
    start + cardsPerPage
  );


  // NEXT
  const next = () => {

    if (start + cardsPerPage < reviewShow.length) {

      setStart(start + cardsPerPage);

    }
  };


  // PREVIOUS
  const prev = () => {

    if (start - cardsPerPage >= 0) {

      setStart(start - cardsPerPage);

    } else {

      setStart(0);

    }
  };


  return (
    <div>

      {/* HERO */}

      <div className="review-hero-div">

        <div className="review-hero-txt">

          <span>GUESTS REVIEW</span>

          <br />

          <b>
            Stories From Our Guests,
            <span> Memories for a Lifetime</span>
          </b>

          <p>
            Real experience, honest words, see why guests love
            their stay at Armonia Resort & Spa.
          </p>

        </div>

      </div>


      {/* REVIEW CARDS */}

      <div className="review-card-div">

        {visibleCards.map((review) => (

          <div
            className="review-card"
            key={review._id}
          >

            <div className="review-star mb-4">

              <TiStarFullOutline className="star" />

              <TiStarFullOutline className="star" />

              <TiStarFullOutline className="star" />

              <TiStarHalfOutline className="star" />

            </div>


            <p>
              {review.message}
            </p>


            <hr />


            <p>
              <b>
                {review.name}
              </b>
            </p>


            <div className="card-date-stayed">

              <FaCalendarAlt />

              <span>

                {new Date(
                  review.createdAt
                ).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}

              </span>

            </div>

          </div>

        ))}

      </div>


      {/* REVIEW BUTTONS */}

      <div className="review-card-btn">

        <button
          onClick={prev}
          disabled={start === 0}
        >
          <FaArrowLeft />
        </button>


        <button
          onClick={next}
          disabled={
            start + cardsPerPage >= reviewShow.length
          }
        >
          <FaArrowRight />
        </button>

      </div>


      {/* REVIEW FORM */}

      <div className="review-form-section">

        <form
          className="review-form"
          onSubmit={handleSubmit(onSubmit)}
        >

          <h2>
            Share Your Experience
          </h2>


          <div className="review-inp">

            <div className="review-inp-info">

              {/* NAME */}

              <input
                type="text"
                placeholder="Your Name"
                {...register("username", {
                  required: "Name is required",
                })}
              />

              {errors.username && (
                <p>
                  {errors.username.message}
                </p>
              )}


              {/* EMAIL */}

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 8,
                    message: "Email is too short",
                  },
                })}
              />

              {errors.email && (
                <p>
                  {errors.email.message}
                </p>
              )}

            </div>


            {/* MESSAGE */}

            <textarea
              placeholder="Your Experience"
              {...register("message", {
                required: "Experience is required",
              })}
            ></textarea>

            {errors.message && (
              <p>
                {errors.message.message}
              </p>
            )}

          </div>


          {/* STARS */}

          <div className="review-inp-star">

            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />
            <TiStarOutline />

          </div>


          <button type="submit">
            Submit
          </button>

        </form>


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