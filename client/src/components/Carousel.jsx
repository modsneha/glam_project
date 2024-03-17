import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';


const Carousel = ({ images }) => {

  return (
    <>
        <Swiper 
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {images.map(( img, i ) => (
                <SwiperSlide key={i}>
                    <img src={img} alt={`Slide ${i}`} className='block w-full h-full max-w-[350px] max-h-[500px] rounded-lg'/>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default Carousel