import React from 'react';
import './Booking.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRoom } from '../../features/RoomSlice';
import { useForm } from 'react-hook-form';

import { IoPersonOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const room = useSelector((state) =>
    state.room.rooms.find((r) => r._id === id)
  );

  useEffect(() => {
    dispatch(getRoom())
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
  }

  if (!room) {
    return <h1>Room Not Found</h1>;
  }

  return (
    <div className='booking-body'>

      <div className='booking-head'>


        <div className='book-room-img'>
          <img src={room.roomImage} alt="" />
        </div>

        <div className='book-room-details'>
          <p>{room.roomName}</p>


          <div className='bookRoom-ex-detail'>
            <div className='bookRoom-detail'>
              <IoPersonOutline />
              <span>{room.noOfGuest} Guests</span>
            </div>

            <div className='bookRoom-detail'>
              <MdOutlineBed />
              <span>{room.nameOfBed}</span>
            </div>

            <div className='bookRoom-detail'>
              <LuSquareArrowOutUpRight />
              <span>{room.roomArea} m<sup>2</sup></span>
            </div>


          </div>


        </div>
      </div>


      <div className='booking-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
        

          <input type="submit" value="Submit" />
        </form>
      </div>


    </div>
  )
}

export default Booking
