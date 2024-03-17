import React from 'react';

import Card from '../components/Card';

const Course = () => {

  return (
    <div className="container h-screen bg-[url('./assets/CourseBg.jpg')] bgImg mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-headingColor font-semibold md:mb-1 md:pt-6 lg:mb-2 pt-6 uppercase text-center">Courses</h1>
      <Card />
    </div>
  );
};

export default Course;
