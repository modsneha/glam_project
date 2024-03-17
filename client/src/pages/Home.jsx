import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className='bg-[url("./assets/back.jpg")] h-screen bgImg pt-[250px] 2xl:h-[800px] overflow-hidden relative'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div>
              <div className='lg:w-[570px] bg-transparent rounded-[10px] backdrop-blur-[5px] p-3'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[40px] md:leading-[60px]'>
                  Let your beauty speak for you
                </h1>
                <h2 className='text-[28px] leading-[40px] text-headingColor font-semibold md:text-[30px] md:leading-[50px]'>
                  Where Glamour Meets Expertise :
                </h2>
                <p className='text__para text-lightPinkColor'>
                  Transforming Dreams into Beauty Realities with <br /><span className='text-lightBlueColor font-medium'>Glam Studio & Academy</span> 
                </p>
                <Link to='/services/book-appointment'>
                  <button className='btn lg:-translate-x-36'>Book Appointment</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home