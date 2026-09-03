import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './RoomSet.css';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom, deleteRoom, editRoom, getRoom } from '../../features/roomSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineBed } from "react-icons/md";
import { LuSquareArrowOutUpRight } from "react-icons/lu";



const RoomSet = () => {

  const [editMode, setEditMode] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const roomShow = useSelector((state) => state.room?.rooms ?? []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoom())
  }, [dispatch]);

  useEffect(() => {
    if (selectedRoom) {
      reset({
        roomName: selectedRoom.roomName,
        noOfBed: selectedRoom.noOfBed,
        noOfGuest: selectedRoom.noOfGuest,
        roomArea: selectedRoom.roomArea,
        roomDescription: selectedRoom.roomDescription,
        roomPrice: selectedRoom.roomPrice,
        nameOfBed: selectedRoom.nameOfBed,


      });
    }
  }, [selectedRoom, reset]);


  const onSubmit = async (data) => {
    try {
      if (selectedRoom) {
        await dispatch(editRoom({
          id: selectedRoom._id,
          data: data
        })).unwrap();

        toast.success("Room Updated Successfully");
      }

      else {
        await dispatch(addRoom(data)).unwrap();

        toast.success("Room Added Successfully");
      }

      reset();
      setSelectedRoom(null);
      setEditMode(true);


    } catch (error) {
      toast.error(
        selectedRoom ?
          "Can't Update Room" :
          "Can't Add Room"
      );
    }
    dispatch(getRoom());
  }

  async function handleDelete(id) {
    try {
      await Swal.fire({
        title: "Warning",
        text: "Want to delete this room",
        icon: "warning",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(deleteRoom(id)).unwrap();
          toast.success("Room Deleted Successfully");
        }
      });
    } catch (error) {
      toast.error("Can't Delete Room");
    }
  }

  return (
    <div>
      <div className='room-nav'>
        <button
          onClick={() => setEditMode(true)}
          style={{
            color: editMode ? "#C89B3C" : "black"
          }}
        >Edit</button>
        <button
          onClick={() => {
            setSelectedRoom(null);
            reset({});
            setEditMode(false);
          }}
          style={{
            color: editMode ? "black" : "#C89B3C"
          }}
        >Add</button>
      </div>
      {
        editMode ?
          <div className='home-card-div'>
            {
              roomShow?.map((room) => (
                <div className="home-card" key={room._id}
                >
                  <div className='home-card-img'>
                    <img src={room.roomImage} alt="" />
                  </div>
                  <div>
                    <div className='home-card-info'>
                      <span>{room.roomName}</span>
                      <p><b>{room.roomPrice}/</b>night</p>
                    </div>
                    <div className='ex-detail'>
                      <div className='detail'>
                        <IoPersonOutline />
                        <span>{room.noOfGuest} Guests</span>
                      </div>

                      <div className='detail'>
                        <MdOutlineBed />
                        <span>{room.nameOfBed}</span>
                      </div>

                      <div className='detail'>
                        <LuSquareArrowOutUpRight />
                        <span>{room.roomArea}m<sup>2</sup></span>
                      </div>
                    </div>

                    <div className='room-btn'>
                      <button id='edit-btn' onClick={() => {
                        setSelectedRoom(room);
                        setEditMode(false);
                      }}>Edit</button>
                      <button id='del-btn' onClick={() => handleDelete(room._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div> :
          <div style={{
            width: '100%'
          }}>
            <form className='room-form' onSubmit={handleSubmit(onSubmit)}>
              <input
                type="file"
                accept="image/*"
                {...register("roomImage",
                  {
                    required: selectedRoom ? false : "Image is required",
                  }
                )}
              />
              <div className='room-form-input'>
                <input
                  type="text"
                  placeholder='Name of Room'
                  {...register("roomName",
                    {
                      required: true,
                    }
                  )}
                />

                <input
                  type="number"
                  placeholder='Room Price'
                  {...register("roomPrice",
                    {
                      required: true,
                    }
                  )}
                />
              </div>
              <div className='room-form-input'>

                <input
                  type="text"
                  placeholder='Name of Bed'
                  {...register("nameOfBed",
                    {
                      required: true,
                    }
                  )}
                />

                <input
                  type="number"
                  placeholder='Number of Bed'
                  {...register("noOfBed",
                    {
                      required: true,
                    }
                  )}
                />
              </div>
              <div className='room-form-input'>

                <input
                  type="number"
                  placeholder='Number of Guest'
                  {...register("noOfGuest",
                    {
                      required: true,
                    }
                  )}
                />

                <input
                  type="number"
                  placeholder='Room Area'
                  {...register("roomArea",
                    {
                      required: true,
                    }
                  )}
                />
              </div>

              <textarea
                placeholder='Room Description'
                {...register("roomDescription",
                  {
                    required: true,
                  }
                )}
              ></textarea>
              <button disabled={isSubmitting} type='submit'>{selectedRoom ? "Update" : "Submit"}</button>
            </form>
          </div>
      }
    </div>
  )
}

export default RoomSet
