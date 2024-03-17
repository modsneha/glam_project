import React from 'react'
import bg1 from '../assets/about_us/pic8.jpg'
import Img1 from '../assets/about_us/img7.jpg'

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-around container h-screen bg-[url('./assets/CourseBg.jpg')] bgImg px-5">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-semibold md:mb-1 md:pt-4 lg:mb-2 lg:pt-6 pt-4 uppercase text-center">about us</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center w-full h-screen overflow-y-scroll'>
        <div className='w-1/2 relative flex items-center justify-center'>
          <img src={bg1} alt='bg' className='absolute rounded-xl h-[450px] w-[380px] -translate-x-24 -translate-y-20' />
          <img src={Img1} alt='img' className='absolute rounded-xl h-[450px] w-[330px] translate-x-20 ' />
        </div>
        <div className='w-1/2 h-full lg:mx-auto lg:px-6 text-xl text-justify -translate-x-10'>
          <span>At <b>Glam Studio & Academy</b>, we are passionate about empowering individuals to express their beauty confidently. Our academy and studio merge education with hands-on experience, providing a comprehensive platform for aspiring beauty enthusiasts. </span>
          <br/>

          <span><b>Our Mission</b> - Empowering Beauty Through Education and Artistry</span>
          <br/>
          <span>We strive to redefine beauty education by fostering creativity, skill development, and a strong sense of confidence. Our mission is to inspire and equip individuals to embark on successful journeys within the dynamic beauty industry.</span>
          <br/>

          <span><b>Why to Choose Glam Studio & Academy ? </b><br/></span>
          <span><b>Experienced Instructors:</b> Learn from industry professionals with years of experience, ensuring you receive top-notch education.</span>
          <br/>
          <span><b>Hands-On Learning:</b> Gain practical experience through hands-on sessions and real-world scenarios, preparing you for success.</span>
   
          <br/>
          <span><b>Our Services</b><br/></span>
          <p>Beyond education, our studio offers premium beauty services designed to enhance your natural beauty. From expert makeup application to personalized skincare routines, our talented artists are dedicated to making you look and feel your best.</p>

          <span><b>Join Us on the Journey</b><br/></span>
          <p>Whether you aspire to become a professional makeup artist, hairstylist, or skincare specialist, Glam Studio & Academy  is your gateway to a fulfilling career in the beauty industry. Join us on the journey to discover, create, and celebrate beauty in all its forms.</p>        
        </div>
      </div>
    </div>
    </>
  )
}

export default About