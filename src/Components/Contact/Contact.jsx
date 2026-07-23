import React from 'react'
import './Contact.css'

import { MdOutlineMail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Contact = () => {

  const navigate = useNavigate();

  function handleMap(){
    // navigate("https://maps.app.goo.gl/rxAwPuwZQ7Nmu6vr6")
  }

  return (
    <div>
      <div style={{
        height: "6rem"
      }}></div>



      <div className='contact-hero-div'>
        <span style={{
          fontWeight: "bold",
          borderBottom: "3px solid #C89B3C"
        }}>CONTACT US</span>
        <b>We'd Love to Here <span>From You</span></b>
        <p>Whether you have a question about our resort, amenities, or booking our team is here to help you.</p>
      </div>


      <div className='message-div'>

        <div className='message-form-div'>


          <div className='message-div-head'>

            <div className='message-mail-icon'>
              <MdOutlineMail />
            </div>

            <div>
              <p>Send Us a Message</p>
              <span>We will get back to you as soon as possible</span>
            </div>


          </div>

          <div className='contact-form-div'>

            <div className='form-input mt-3'>
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Email Address' />
              <input type="text" placeholder='Phone Number' />
              <input type="text" placeholder='Subject' />
            </div>

            <textarea placeholder='Your Message'></textarea>
            <button><FaPaperPlane /> Send Message</button>
          </div>


        </div>


        <div className='resort-map-div'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.7689994876328!2d99.26755187439481!3d10.55511596323817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ff5418f1d49e85%3A0xdf5f3a6952f88c04!2sArmonia%20Village%20Resort%20%26%20Spa!5e1!3m2!1sen!2sin!4v1784633240672!5m2!1sen!2sin"
            width="100%"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>

          <button onClick={handleMap}><FaPaperPlane/> Get Direction</button>
        </div>

      </div>

    </div>
  )
}

export default Contact
