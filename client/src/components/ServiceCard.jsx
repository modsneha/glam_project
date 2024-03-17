// ServiceCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubService, deselectSubService, selectServices, initialState } from '../redux/serviceSlice';
import { useParams } from 'react-router-dom';

const ServiceCard = () => {
  const { serviceId } = useParams();
  const services = useSelector(state => state.service.services);
  const selectedService = services.data.find( service => service.id === parseInt(serviceId));

  // const handleSubServiceClick = (subServiceId) => {
  //   if (selectedSubServices.includes(subServiceId)) {
  //     dispatch(deselectSubService(subServiceId));
  //   } else {
  //     dispatch(selectSubService(subServiceId));
  //   }
  // };


  return (
    <span className='container flex justify-center items-start py-6 px-4'>
      <span>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-semibold md:mb-1 md:pt-6 lg:mb-2 lg:pt-8 pt-4 uppercase text-center">What services are you interested in?</h1>
        <div className='flex flex-wrap mx-auto justify-center w-full h-[80vh] overflow-y-scroll grid-cols-auto gap-6'>
            <h1>{services.data[serviceId].title}</h1>
            <ul>
              {services.data.subServices.map(subService => (
                <li key={subService.id}>
                  {subService.title} - {subService.price}
                </li>
              ))}
            </ul>
        </div>
      </span>
    </span>
  );
};

export default ServiceCard;
