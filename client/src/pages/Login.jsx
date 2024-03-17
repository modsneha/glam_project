import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import "../Styles/Login.css";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();
  const URL = import.meta.env.VITE_SERVER_URL;
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    phoneNo: '',
  });

  useEffect(() => {
    if(location.pathname === '/sign_up') {
      setIsSignUp(true);
    }
    if(location.pathname === '/sign_in') {
      setIsSignUp(false);
    }
  }, [location.pathname])

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const res = await response.json();
      // console.log(res);
      dispatch(setUser(res));
      if(res.token) {
        localStorage.setItem('user:token', res.token);
        localStorage.setItem('user:details', JSON.stringify(res.user));
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSignUp(false);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className=''>
      <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
        <form onSubmit={e => handleLogin(e)}>
          <div className="user_form sign-in">
            <h2>Welcome back,</h2>
            <label className="label_field">
              <span>Email</span>
              <input className='input_field' type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </label>
            <label className="label_field">
              <span>Password</span>
              <input className='input_field' type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <input type="submit" value='Log In' className="btn mt-10 mb-5 bg-[#d4af7a] uppercase" />
          </div>
        </form>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn" onClick={toggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <form onSubmit={handleRegister} className={`${isSignUp ? 'cont.s--signup user_form sign-up' : 'user_form sign-up'}`}>
            <h2>Let your beauty speak for you</h2>
            <label className="label_field">
              <span>Name</span>
              <input className='input_field' type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </label>
            <label className="label_field">
              <span>Email</span>
              <input className='input_field' type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </label>
            <label className="label_field">
              <span>Phone No</span>
              <input className='input_field' type="text" value={data.phoneNo} onChange={(e) => setData({ ...data, phoneNo: e.target.value })} maxLength={10} />
            </label>
            <label className="label_field">
              <span>Password</span>
              <input className='input_field' type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            </label>
            <input type="submit" value='Register' className="btn mt-10 mb-5 bg-[#d4af7a] uppercase" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;