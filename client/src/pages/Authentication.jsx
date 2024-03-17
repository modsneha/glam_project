import React, { useState } from 'react'
import "../Styles/Login.css";

function Login() {

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    console.log(isSignUp);
  };

  return (
    <div className=''>
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="user_form sign-in">
        <h2>Welcome back,</h2>
        <label className="label_field">
          <span>Email</span>
          <input className='input_field' type="email" />
        </label>
        <label className="label_field">
          <span>Password</span>
          <input className='input_field' type="password" />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="btn mt-10 mb-5 bg-[#d4af7a] uppercase">log In</button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div className="img__btn" onClick={toggleSignUp}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className={`{isSignUp ? 'cont.s--signup user_form sign-up' : 'user_form sign-up'}`}>
          <h2>Let your beauty speak for you</h2>
          <label className="label_field">
            <span>Name</span>
            <input className='input_field' type="text" />
          </label>
          <label className="label_field">
            <span>Email</span>
            <input className='input_field' type="email" />
          </label>
          <label className="label_field">
            <span>Password</span>
            <input className='input_field' type="password" />
          </label>
          <button type="button" className="btn mt-10 mb-5 bg-[#d4af7a] uppercase">Sign Up</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;