import React, { useState } from 'react'
import Basic from '../assets/BASIC.jpg';
import Advance from '../assets/Advance.jpeg';
import Hairstyle from '../assets/Hairstyle.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCoursePlans } from '../redux/coursePlansSlice'

const Card = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coursePlans = useSelector(state => state.coursePlans);

  // const [coursePlans, setCoursePlans] = useState([
  //   {
  //     id: 1,
  //     title: 'Basic',
  //     description: 'Daily wear makeup, Threading, Basic hairstyle, Draping different style sarees',
  //     registered: false,
  //     includes: [
  //       "Daily look",
  //       "Basic smoky eyes",
  //       "Threading",
  //       "Office / casual look",
  //       "Skin preparation",
  //       "Choose right foundation",
  //       "Skin type's",
  //       "Saree draping",
  //       "Blending",
  //     ],
  //     images: [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 ],
  //     price: 5000,
  //     Duration: '1 month',
  //     Timing: '3 days/week (2hrs session)',
  //     Batches: [
  //       'Mon : 11 am to 1 pm',
  //       'THU : 11 am to 1 pm',
  //       'SAT : 12 pm to 2 pm',
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: 'Advance',
  //     description: 'Every ocassion makeup and hairstyle which includes bridal makeup too',
  //     registered: false,
  //     includes: [
  //       "Skin analysis",
  //       "Product knowledge",
  //       "Different types of foundation",
  //       "Hi-light and contour",
  //       "Powder technique",
  //       "Blush for different face shape",
  //       "Eye make up for different eye shape",
  //       "Lip contour & lip shaping",
  //       "Eyebrow proportion",
  //       "eye liner for different eye shape",
  //       "Groom makeup",
  //       "HD and 3D makeup",
  //       "Colour theory",
  //       "Bridal makeup",
  //     ],
  //     images: [ AImg1, AImg2, AImg3, AImg4, AImg5, AImg6, AImg7 ],
  //     price: 20000,
  //     Duration: '2 month',
  //     Timing: '3 days/week (3hrs session)',
  //     Batches: [
  //       'TUE : 2 pm to 5 pm',
  //       'THU : 3 pm to 6 pm',
  //       'FRI : 12 pm to 3 pm',
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: 'Hair Style',
  //     description: 'Maharashtraian, South-indian, Bridal, International, Siders',
  //     registered: false,
  //     includes: [
  //       "Advanced product knowledge",
  //       "Advanced hair tools knowledge",
  //       "Extension uses",
  //       "South indian hairstyle (3 types)",
  //       "Maharashtraian hairstyle (3 types)",
  //       "International hairstyle (3 types)",
  //       "Sider hairstyle (3 types)",
  //       "Bridal hairstyle (3 types)",
  //     ],
  //     images: [ HImg1, MHImg1, IHImg1, SHImg1, BHImg1, ],
  //     price: 15000,
  //     Duration: '1.5 month',
  //     Timing: '3 days/week (3hrs session)',
  //     Batches: [
  //       'Mon : 11 am to 2 pm',
  //       'WED : 12 pm to 3 pm',
  //       'SAT : 12 pm to 3 pm',
  //     ],
  //   },
  // ]);

  const images = [ Basic, Advance, Hairstyle ];

  const handleEnroll = (id) => {
    dispatch(setCoursePlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id ? { ...plan, registered: !plan.registered } : plan
      )
    ));
  };

  return (
    <>
    <span className='container flex justify-center items-start py-6 px-4'>
      <span>
        <div className='flex flex-wrap mx-auto justify-center w-full h-[80vh] overflow-y-scroll grid-cols-auto gap-6'>
          {
            coursePlans.map((coursePlan,i) => (
              <article key={coursePlan.id} className="max-w-[400px] relative block transition-all duration-[0.4s] ease-in-out overflow-hidden rounded-2xl">
                <figure className='w-full h-[320px] overflow-hidden'>
                  <img key={i} src={images[i]} alt="preview_image" className='h-full aspect-[3/2] overflow-hidden object-cover transition-transform duration-[0.4s] ease-in-out origin-center max-w-full hover:scale-125' />
                </figure>
                <div className='p-6 bg-white'>
                  <h2 className='mb-[18px] text-[2rem] text-headingColor transition-colors duration-[0.3s] ease-out'>{coursePlan.title}</h2>
                  <p className='mb-6 text-[1rem]'>
                    {coursePlan.description}
                  </p>
                  <div className='flex gap-[50px] items-center justify-center'>
                    <button className={`bg-primaryColor text-white text-[1.2rem] px-4 py-2 h-[50px] w-[150px]`} onClick={() => (navigate(`/course/details/${coursePlan.id}`, {replace: true, state: { coursePlan }}))} >
                      Read more
                    </button>
                    <Link to='/course/register'>
                      <button
                        className={`bg-primaryColor text-white text-[1.2rem] px-4 py-2 h-[50px] w-[150px] ${
                          coursePlan.registered ? 'bg-textColor cursor-not-allowed' : ''
                        }`}
                        onClick={() => handleEnroll(coursePlan.id)}
                        disabled={coursePlan.registered}
                        >
                        {coursePlan.registered ? 'Registered' : 'Register'}
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
      </span>
    </span>

  </>
  )
}

export default Card;
