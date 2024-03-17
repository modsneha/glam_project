import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { GrMail } from "react-icons/gr";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <span className="flex flex-col items-center justify-center h-full w-full pb-10 bgImg bg-[url('./assets/CourseBg.jpg')]">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-bold md:mb-1 md:pt-6 lg:mb-2 lg:pt-8 pt-4 uppercase text-center">contact us</h1>
      <div className='flex items-center justify-center w-full h-full'>
      <div className='w-[40%]'>
        <div className='flex flex-col items-center justify-center border rounded-lg w-[400px] h-[600px] mx-auto mt-[30px] bg-transparent backdrop-blur-[5px] text-white'>
          <h2 className='text-center text-headingColor font-semibold text-3xl border-b border-[#3e3939] w-[190px] mb-10'>Enquiry Form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-8">
                <input type="text" name='user_name' id="name" className="block px-2.5 pb-2.5 pt-4 w-[350px] text-sm text-white bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="name" className="absolute text-sm duration-300 transform -translate-y-6 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Full Name</label>
            </div>
            <div className="relative mb-8">
                <input type="email" name='user_email' id="name" className="block px-2.5 pb-2.5 pt-4 w-[350px] text-sm text-white bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="name" className="absolute text-sm duration-300 transform -translate-y-6 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail</label>
            </div>
            <div className="relative mb-8">
                <input type="text" name='phone_no' id="name" className="block px-2.5 pb-2.5 pt-4 w-[350px] text-sm text-white bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " maxLength={10} />
                <label htmlFor="name" className="absolute text-sm duration-300 transform -translate-y-6 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone no</label>
            </div>
            <div className="relative mb-8">
                <textarea type="text" name='message' id="name" className="block px-2.5 pb-2.5 pt-4 w-[350px] text-sm text-white bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " maxLength={150}/>
                <label htmlFor="name" className="absolute text-sm duration-300 transform -translate-y-6 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message</label>
            </div>
            <div className='flex items-center justify-center'>
              <button type='reset' className='btn w-[150px] mt-4'>Reset</button>
              <button type='submit' className='btn w-[150px] mt-4'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='w-[25%] h-full -translate-x-8 text-xl'>
        <div>
          <div className='p-3 flex flex-col items-center justify-center mx-auto mb-5'>
              <span className='flex items-center justify-center gap-5 text-headingColor text-4xl border-b border-solid border-[#3e3939] mb-10'>
                <i><IoMdClock /></i>
                <h3>Business Hours</h3>
              </span>
              <span className='flex items-center justify-center gap-3 mb-5'>
                <span>Monday - Friday</span>
                <div className='flex flex-col items-center '>
                  <span>10:00 am to 4:00 pm</span> 
                  <span>6:00 pm to 9:00 pm</span>
                </div>
              </span>
              <span className='flex items-center justify-center gap-3 mb-5'>
                <span>Saturday - Sunday</span>
                <div className='flex flex-col items-center '>
                  <span>10:00 am to 4:00 pm</span>
                  <span>7:00 pm to 9:00 pm</span>
                </div>
              </span>
          </div>
        </div>
        <div className='border-b border-solid border-[#3e3939] m-5'></div>
        <div className='flex flex-col items-center text-2xl mt-14'>
          <div className='flex items-center gap-3'>
            <GrMail />
            <span>khushg271@gmail.com</span>
          </div>
          <div className='flex items-center gap-3'>
            <PiPhoneCallFill />
            <span>+91-9920484551</span>
          </div>
          <div className='flex items-center gap-3'>
            <PiPhoneCallFill />
            <span>+91-9137283439</span>
          </div>
        </div>
      </div>
      <div className='w-[35%] flex flex-col items-center mx-auto'>
      <h2 className='flex items-center justify-center gap-3 text-center text-headingColor text-4xl border-b border-[#3e3939] w-[185px] mb-10'>
        <i><FaLocationDot /></i>
        Location
      </h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!4v1707682339662!6m8!1m7!1snmADdHVCqQAyv4cPi0wfUw!2m2!1d19.17986865052222!2d72.9538784061369!3f180.97!4f-4.959999999999994!5f0.4000000000000002'
        width="500"
        height="350"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      </div>
      </div>
    </span>
  )
}

export default Contact