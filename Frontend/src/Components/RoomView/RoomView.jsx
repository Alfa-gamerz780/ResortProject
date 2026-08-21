import React, { useEffect } from 'react'
import './RoomView.css'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getReview } from '../../features/ReviewSlice';
import { getRoom } from '../../features/RoomSlice';


import { IoPersonOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import Check from '../Check-Availability/Check';

import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";

import {
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const RoomView = () => {
  const { id } = useParams();

  const room = useSelector((state) =>
    state.room.rooms.find((r) => r._id === id)
  );
  const reviewShow = useSelector((state) => state.review.reviews);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  
  
  useEffect(() => {
    dispatch(getReview());
    dispatch(getRoom());
  }, [dispatch]);

  if (!room) {
    return <h1>Room Not Found</h1>;
  }


  return (
    <div>

      <div className='view-room-div'>

        <div className='view-room-img'>
          <img src={room.roomImage} alt="" />
        </div>

        <div className='view-room-info'>
          <div>
            <p>{room.roomName}</p>


            <div className='viewRoom-ex-detail'>
              <div className='viewRoom-detail'>
                <IoPersonOutline />
                <span>{room.noOfGuest} Guests</span>
              </div>

              <div className='viewRoom-detail'>
                <MdOutlineBed />
                <span>{room.nameOfBed}</span>
              </div>

              <div className='viewRoom-detail'>
                <LuSquareArrowOutUpRight />
                <span>{room.roomArea} m<sup>2</sup></span>
              </div>
            </div>

            <hr />

            <span>{room.roomDescription}</span>
          </div>

          <div className='room-view-book'>
            <button onClick={() => navigate(`/roomBook/${id}`)}>Book Now</button>
          </div>
        </div>

      </div>

      <div className='review-card-div'>
        {
          reviewShow?.slice(0, 4).map((review) => {
            return (
              <div className="review-card" key={review._id}>

                <div className="review-star mb-4">
                  <TiStarFullOutline className="star" />
                  <TiStarFullOutline className="star" />
                  <TiStarFullOutline className="star" />
                  <TiStarHalfOutline className="star" />
                </div>

                <p>{review.message}</p>

                <hr />

                <p><b>{review.name}</b></p>

                <div className="card-date-stayed">
                  <FaCalendarAlt />
                  <span>{new Date(review.createdAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}</span>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RoomView
