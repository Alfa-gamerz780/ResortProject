import React, { useEffect } from 'react'
import './Quarry.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteQuarry, getQuarry } from '../../features/quarrySlice';
import Swal from 'sweetalert2';

import { FaCalendarDays } from "react-icons/fa6";



const Quarry = () => {
    const quarryShow = useSelector((state) => state.quarry.quarries);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuarry());
    }, [dispatch]);

    return (
        <div>
            <div style={{
                height: '3rem'
            }}></div>


            <div className="review-card-outer">

                {
                    quarryShow?.map((quarry) => (
                        <div className="review-card" key={quarry._id}>
                            <b>{quarry.name}</b>
                            <small>{quarry.email}</small>
                            <hr />
                            <div >
                                <p>{quarry.message}</p>
                            </div>
                            <hr />
                            <span><FaCalendarDays />
                                {new Date(
                                    quarry.createdAt
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
                                            dispatch(deleteQuarry(quarry._id))
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

export default Quarry;
