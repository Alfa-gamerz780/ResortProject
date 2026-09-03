import React, { useState } from 'react';
import './Login.css';
import '../animation.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

  const [toggle, setToggle] = useState('password');
  const [serverError, setServerError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();


  const handleToggle = () => {

    setToggle((prev) =>
      prev === 'password'
        ? 'text'
        : 'password'
    );

  };

  const onSubmit = async (data) => {
    try {
      setServerError("");

      await dispatch(
        loginThunk({
          empEmail: data.empEmail,
          password: data.password
        })
      ).unwrap();

      toast.success("Login Successfully");

      navigate("/home");

      reset();

    } catch (error) {
      setServerError(
        error || "Invalid Email or Password"
      );
    }
  };

  return (

    <div className="login-div">

      <div id="login-form-div">

        <form
          className="login-form"
          onSubmit={handleSubmit(onSubmit)}
        >

          <h2
            style={{
              color: "white",
              margin: "0",
              padding: "0"
            }}
          >
            Login
          </h2>

          {serverError && (

            <div className="error-msg">

              {serverError}

            </div>

          )}


          <input
            type="email"
            placeholder="Enter Email ID"

            {...register("empEmail", {
              required:
                "Employee Email ID is required"
            })}
          />


          {errors.empEmail && (

            <div className="error-msg">

              {errors.empEmail.message}

            </div>

          )}

          <div className="pass-div">

            <input
              type={toggle}
              placeholder="Enter Password"

              {...register("password", {
                required:
                  "Password is required",

                minLength: {
                  value: 8,

                  message:
                    "Password must be at least 8 characters"
                }
              })}
            />


            <button
              type="button"
              onClick={handleToggle}
            >

              {toggle === "password" ? (

                <FaEye />

              ) : (

                <FaEyeSlash />

              )}

            </button>

          </div>


          {errors.password && (

            <div className="error-msg">

              {errors.password.message}

            </div>

          )}


          <button
            type="submit"
            className="login-btn"
            disabled={isSubmitting}
          >

            {isSubmitting
              ? "Logging in..."
              : "Login"
            }

          </button>


        </form>

      </div>

    </div>

  );

};


export default Login;