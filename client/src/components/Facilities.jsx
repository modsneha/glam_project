import React from 'react'
import Int1 from '../assets/gallery/Int1.avif';
import Int2 from '../assets/gallery/Int2.avif';
import Int3 from '../assets/gallery/Int3.jpg';
import Int4 from '../assets/gallery/fac1.webp';
import Int5 from '../assets/gallery/fac2.jpg';
import Int6 from '../assets/gallery/fac3.webp';
import Int7 from '../assets/gallery/fac4.jpg';
import Int8 from '../assets/gallery/fac5.jpeg';
import Int9 from '../assets/gallery/Glam Studio &.png';

import Carousel from './Carousel';

const Facilities = () => {

    const Images = [
        Int1, 
        Int2, 
        Int3,
        Int4,
        Int5,
        Int6,
        Int7,
        Int8,
        Int9,
    ]

  return (
    <div>
        <Carousel images={Images} />
    </div>
  )
}

export default Facilities;