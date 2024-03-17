import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectServices } from '../redux/serviceSlice'

const Services = () => {

  const services = useSelector(state => state.service.services);

  // const services = [
  //   {
  //     id: 1,
  //     title: 'Manicure & Pedicure',
  //     images: Img2,
  //   },
  //   {
  //     id: 2,
  //     title: 'Beauty Facial',
  //     images: Img1,
  //   },
  //   {
  //     id: 3,
  //     title: 'Bridal Packages',
  //     images: Img5,
  //   },
  //   {
  //       id: 4,
  //       title: 'Hair Spa',
  //       images: Img3,
  //   },
  //   {
  //       id: 5,
  //       title: 'Makeup',
  //       images: Img6,
  //   },
  //   {
  //       id: 6,
  //       title: 'Hairstyle',
  //       images: Img4,
  //   },
  // ];
console.log(services.data);
  return (
    <div className="container h-screen bg-[url('./assets/CourseBg.jpg')] bgImg mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-semibold md:mb-1 md:pt-6 lg:mb-2 lg:pt-8 pt-4 uppercase text-center ">What services are you interested in?</h1>
      <span className='container flex justify-center items-start py-8 px-4'>
          <span>
              <div className='flex flex-wrap mx-auto justify-center w-full h-[80vh] overflow-scroll grid-cols-auto gap-6'>
                {
                  services.data.map((service,i) => (
                    <Link to={`/services/details/${service.id}`}>
                      <article key={service.serviceId} className="max-w-[450px] relative block transition-all duration-[0.4s] ease-in-out overflow-hidden rounded-2xl cursor-pointer">
                        <figure className='w-full h-[350px] overflow-hidden'>
                          <img key={i} src={service.images} alt="preview_image" className='h-full aspect-[3/2] overflow-hidden object-cover transition-transform duration-[0.4s] ease-in-out origin-center max-w-full hover:scale-125' />
                        </figure>
                        <div className='p-6 bg-white'>
                          <h2 className='mb-[18px] text-[2rem] text-headingColor transition-colors duration-[0.3s] ease-out'>{service.title}</h2>
                        </div>
                      </article>
                    </Link>
                  ))
                }
              </div>
          </span>
        </span>
      {/* <ServiceCard service={services} /> */}
    </div>
  )
}

export default Services