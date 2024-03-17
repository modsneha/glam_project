import React from 'react'
import { ImageViewer } from "react-image-viewer-dv"
import Img1 from '../assets/gallery/Img1.jpg';
import Img2 from '../assets/gallery/Img2.jpg';
import Img3 from '../assets/gallery/Img3.jpg';
import Img4 from '../assets/gallery/Img4.jpg';
import Img5 from '../assets/gallery/Img5.jpg';
import Img6 from '../assets/gallery/Img6.webp';
import Img7 from '../assets/gallery/Img7.png';
import Img8 from '../assets/gallery/Img8.jpg';
import Img9 from '../assets/gallery/Img9.jpeg';
import Img10 from '../assets/gallery/Img10.jpg';
import Img11 from '../assets/gallery/Img11.avif';
import Img12 from '../assets/gallery/Img12.avif';
import Img13 from '../assets/gallery/Img13.webp';
import Img14 from '../assets/gallery/Img14.jpeg';
import Img15 from '../assets/gallery/Img15.webp';

const Images = () => {

    const Images = [
        Img2,
        Img9,
        Img6,
        Img5,
        Img7,
        Img14,
        Img10,
        Img4,
        Img13,
        Img8,
        Img15,
        Img1,
        Img11,
        Img3,
        Img12,
    ]

  return (
    <span>
        <div className='flex flex-wrap mx-auto mt-5 justify-center w-full h-[80vh] overflow-scroll grid-cols-auto gap-6'>
        {
            Images.map((img,i) => (
                <ImageViewer key={i} className="max-w-[450px] relative block overflow-hidden">
                    <figure className='w-full h-[350px] overflow-hidden'>
                    <img key={i} src={img} alt="preview_image" className='h-full aspect-[3/2] overflow-hidden object-cover transition-transform duration-[0.4s] ease-in-out origin-center max-w-full' />
                    </figure>
                </ImageViewer>
            ))
        }
        </div>
    </span>
  )
}

export default Images