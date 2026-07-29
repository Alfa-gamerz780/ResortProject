import React from 'react'
import './RoomView.css'

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import { IoPersonOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";

const RoomView = () => {
  const { id } = useParams();

  const room = useSelector((state) =>
    state.room.rooms.find((r) => r.id === Number(id))
  );

  if (!room) {
    return <h1>Room Not Found</h1>;
  }


  return (
    <div>
      <div style={{
        height: '6rem'
      }}></div>

      <div className='view-room-div'>

        <div className='view-room-img'>
          <img src={room.image} alt="" />
        </div>

        <div className='view-room-info'>
          <p>{room.title}</p>


          <div className='viewRoom-ex-detail'>
            <div className='viewRoom-detail'>
              <IoPersonOutline />
              <span>{room.guest} Guests</span>
            </div>

            <div className='viewRoom-detail'>
              <MdOutlineBed />
              <span>{room.bed}</span>
            </div>

            <div className='viewRoom-detail'>
              <LuSquareArrowOutUpRight />
              <span>{room.area} m<sup>2</sup></span>
            </div>
          </div>

          <hr />

          <span>{room.dec}</span>
        </div>

      </div>
    </div>
  )
}

export default RoomView
