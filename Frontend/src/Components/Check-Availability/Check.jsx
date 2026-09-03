import React from 'react'
import './Check.css'

const Check = () => {
  return (
    <div>
      <div id='check-section'>
                <div id='check-in-div'>
      
                  <div className='check-in-option'>
                    <i className='bi bi-calendar'></i>
                    <div>
                      <p>Check In</p>
                      <input type="date" />
                    </div>
                  </div>
      
                  <div className='check-in-option'>
                    <i className='bi bi-calendar'></i>
                    <div>
                      <p>Check Out</p>
                      <input type="date" />
                    </div>
                  </div>
      
                  <div className='check-in-option'>
                    <i className='bi bi-person'></i>
                    <div>
                      <p>Guests</p>
                      <select name="" id="">
                        <option value="">Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                        <option value="5">5 Person</option>
                        <option value="6">6 Person</option>
                        <option value="7">7 Person</option>
                        <option value="8">8 Person</option>
                        <option value="9">9 Person</option>
                        <option value="10">10 Person</option>
                      </select>
                    </div>
                  </div>
      
                  <div className='check-in-option'>
                    <i className='bi bi-hospital'></i>
                    <div>
                      <p>Rooms</p>
                      <select name="" id="">
                        <option value="">Select</option>
                        <option value="1">1 Room</option>
                        <option value="2">2 Room</option>
                        <option value="3">3 Room</option>
                        <option value="4">4 Room</option>
                        <option value="5">5 Room</option>
                      </select>
                    </div>
                  </div>
                </div>
      
                <button id='check-btn'>Check Availability</button>
              </div>
    </div>
  )
}

export default Check
