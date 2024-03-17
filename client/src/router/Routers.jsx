import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Course from '../pages/Course'
import About from '../pages/About'
import Review from '../pages/Review'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Details from '../components/Details'
import { useSelector } from 'react-redux'

import { Routes, Route, Navigate } from 'react-router-dom'
import Gallery from '../pages/Gallery'
import ServiceCard from '../components/ServiceCard'
import BookAppointment from '../pages/BookAppointment'

const Routers = () => {

  const ProtectedRoute = ({ children, auth = false }) => {
    const isLoggedIn = localStorage.getItem('user:token') !== null || false;
    console.log(isLoggedIn);
    if(!isLoggedIn && auth) {
      return <Navigate to={'/sign_in'} />
    } else if(isLoggedIn && ['/sign_in', '/sign_up'].includes(window.location.pathname)) {
      // console.log('object :>> ');
      return <Navigate to={'/'} />
    }

    return children

  }

  return (
    <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home auth={true} />
          </ProtectedRoute>
        } />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course' element={<Course />} />
        <Route path='/course/register' element={
          <ProtectedRoute>
            <Register auth={true} />
          </ProtectedRoute>} />
        <Route path='/course/details/:serviceId' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services/details/:serviceId' element={<ServiceCard />} />
        <Route path='/services/book-appointment' element={<BookAppointment />} />
        <Route path='/sign_in' element={<ProtectedRoute><Login isSignInPage={true} /></ProtectedRoute>} />
        <Route path='/sign_up' element={<ProtectedRoute><Login isSignInPage={false} /></ProtectedRoute>} />
    </Routes>
  )
}

export default Routers