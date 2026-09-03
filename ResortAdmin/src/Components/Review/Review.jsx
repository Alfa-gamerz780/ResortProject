import React, { useEffect } from 'react'
import './Review.css'
import { FaCalendarDays } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { dropReview, getReview } from '../../features/reviewSlice';
import Swal from 'sweetalert2';

const Review = () => {
  const reviewShow = useSelector((state) => state.review.reviews);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getReview())
  }, [dispatch]);


  return (
    <div>
      <div style={{
        height: '3rem'
      }}></div>


      <div className="review-card-outer">

        {
          reviewShow?.map((review) => (
            <div className="review-card" key={review._id}>
              <b>{review.name}</b>
              <small>{review.email}</small>
              <hr />
              <div >
                <p>{review.message}</p>
              </div>
              <hr />
              <span><FaCalendarDays />{new Date(
                review.createdAt
              ).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}</span>
              <div className='del-btn'>
                <button className='text-light' onClick={() => {
                  Swal.fire({
                    title: "Warning",
                    text: "Want to delete this review",
                    icon: "warning",
                    showCancelButton: true,
                  }).then((result) => {
                    if (result.isConfirmed)
                      dispatch(dropReview(review._id))
                  })
                }}>Delete</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Review
