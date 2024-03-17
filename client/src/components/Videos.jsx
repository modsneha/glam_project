import React from 'react'
import Vid1 from '../assets/gallery/Vid1.mp4';
import Vid2 from '../assets/gallery/Vid2.mp4';
import Vid3 from '../assets/gallery/Vid3.mp4';
import Vid4 from '../assets/gallery/Vid4.mp4';
import Vid5 from '../assets/gallery/Vid5.mp4';
import Vid6 from '../assets/gallery/Vid6.mp4';
import Vid7 from '../assets/gallery/Vid7.mp4';
import Vid8 from '../assets/gallery/Vid8.mp4';
import Vid9 from '../assets/gallery/Vid9.mp4';

const Video = () => {

    const Videos = [
        Vid2,
        Vid1,
        Vid4,
        Vid7,
        Vid6,
        Vid5,
        Vid3,
        Vid8,
        Vid9,
    ]

  return (
    <span>
        <div className='flex flex-wrap mx-auto mt-5 px-3 justify-center w-full h-[80vh] overflow-scroll grid-cols-auto gap-6'>
        {
            Videos.map((vid,i) => (
              <article key={i} className="">
                <figure className='w-full h-[600px]'>
                  <video key={i} src={vid} alt="Preview_Videos" muted loop autoPlay className='h-full aspect-[3/4] object-cover origin-center max-w-full' />
                </figure>
              </article>
            ))
        }
        </div>
    </span>
  )
}

export default Video