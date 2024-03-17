import React from 'react'
// import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { PiWhatsappLogoBold, PiInstagramLogoBold  } from "react-icons/pi";

const Footer = () => {
  const number = import.meta.env.VITE_NUMBER
  return (
    <><div className="NavbarGradient">
      <div className='flex items-center p-3 w-full'>
        <span className='w-1/2'>
          <div className='flex flex-col items-center justify-center gap-2 text-xl'>
            <h3 className='text-center text-headingColor font-semibold text-2xl border-b border-[#3e3939] w-[95px]'>Address</h3>
            <span className='flex flex-col items-center justify-center'>
              <span>Gala no 03, Morphosis tower, DDU marg</span>
              <span>Mulund (West), Mumbai (400080)</span>
            </span>
          </div>
        </span>
        <div className='w-1/2'>
          <span className='flex flex-col items-center justify-center gap-3 text-2xl'>
            <h3 className='text-center text-headingColor font-semibold text-2xl border-b border-[#3e3939] w-[140px]'>Follow Us On</h3>
            <div className='flex items-center justify-center gap-5'>
              <a href='https://www.instagram.com/makeover_bykhushi01?igsh=MW0zcTM1a2hxYWc3' target='_blank' className='flex items-center justify-center gap-2 cursor-pointer text-[rgba(214,41,118,1)]'> 
                <i><PiInstagramLogoBold  /></i>
                <span className=''>Instagram</span>
              </a>
              <a href='https://x.com/NiravGohil003?t=wEVSHE9iRKpYD_yglkEzHQ&s=09' target='_blank' className='flex items-center justify-center gap-2 cursor-pointer text-blue-600'>
                <i><BsTwitter /></i>
                <span>Twitter</span>
              </a>
              <a href={`https://wa.me/${number}`} target='_blank' className='flex items-center justify-center gap-2 cursor-pointer text-green-600'>
                <i><PiWhatsappLogoBold /></i>
                <span>Whatsapp</span>
              </a>
            </div>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center h-10'>
          {/* &#10084;&nbsp;<p className='text-textColor'>Developed By Sneha Modanwal & Khushi Gupta</p>&nbsp;&#10084; */}
          <span>Copyright &copy;2024 All rights reserved</span>
      </div>
    </div>
    </>
  )
}

export default Footer