import React from 'react'

import Carousel from './Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const Details = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state.coursePlan;
  // console.log(plan.Batches);

  return (
    <>
      <div className="flex flex-col items-center justify-around h-[90vh] px-5 bg-[url('./assets/CardBg.jpg')] bgImg">
        <div className='flex items-center justify-center w-full'>
          <div className='w-[5%] h-full flex items-center justify-center'>
            <div className='text-3xl cursor-pointer'>
              <FaArrowLeft onClick={() => (navigate('/course'))} />
            </div>
          </div>
          <div className='w-[95%]'>
            <div className='w-full flex items-center justify-center'>
              <h1 className='text-headingColor font-semibold text-3xl uppercase text-center border-b-2 border-b-textColor'>{plan.title} Course</h1>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full h-[90%]'>
          <div className="w-1/2">
            <Carousel images={plan.images} />
          </div>
          <div className='w-1/2 h-full p-5 flex flex-col flex-shrink items-center justify-center rounded-2xl'>
          {/* bg-gradient-to-tr from-[rgba(238,174,202,1)] to-[rgba(148,187,233,1)] */}
            <div>
              <p className='text-headingColor font-bold text-3xl'>Things to be covered in Workshop</p>
              <br />
              <ul className='text-xl list-decimal pl-7'>
                {plan.includes.map((items, i) => (
                  <li key={i}>{items}</li>
                  ))}
              </ul>
              <br />
              <span className='text-xl text-headingColor font-medium'>*Class will be conducted offline</span>
              <br />
              <br />
              <div className='text-2xl font-semibold'>
                <p> Fees : ₹{plan.price}</p>
                <p> Duration : {plan.Duration}</p>
                <p> Timings : {plan.Timing}</p>
                <span className='flex gap-5'>
                  Batches : 
                  <p className='flex flex-col items-center justify-center'>{plan.Batches.map((item,i) => (
                    <li key={i} className='text-lg font-semibold list-none '>{item}</li>
                  ))} </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details