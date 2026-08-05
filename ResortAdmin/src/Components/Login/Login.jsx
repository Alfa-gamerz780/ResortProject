import React, { useState } from 'react'
import './Login.css'
import '../animation.css'

import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [toggle, setToggle] = useState('password');
  const [empID, setEmpID] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleToggle(e) {
    e.preventDefault();
    toggle === 'password' ?
      setToggle('text') :
      setToggle('password')
  }

  async function handleLogin(e) {
    e.preventDefault();
    console.log("click")
    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/add",
        {
          empID,
          password,
        });

        dispatch(loginSuccess(res.data));

        localStorage.setItem(
          'token',
          res.data.token
        );

        setEmpID("");
        setPassword("");

        navigate('../')
    }
    catch (error) {
      console.log(error)
    }
  };


  return (
    <div className='login-div'>
      <div id='login-form-div'>
        <form action="" className='login-form'>
          <h2 style={{
            color: "white",
            margin: "0",
            padding: '0'
          }}>Login</h2>
          <input
            type="text"
            placeholder='Enter ID'
            value={empID}
            onChange={(e) => setEmpID(e.target.value)}
          />
          <div className='pass-div'>
            <input
              type={toggle}
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={(e) => handleToggle(e)}
            >
              {
                toggle === 'password' ?
                  <FaEye /> :
                  <FaEyeSlash />
              }
            </button>
          </div>
          <button className='login-btn' onClick={(e) => { handleLogin(e) }}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
