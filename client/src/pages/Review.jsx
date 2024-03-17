import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Review = () => {        

    const [ data, setData ] = useState({
        name: '',
        message: '',
    })
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
              const response = await axios.get('http://localhost:8080/api/reviews');
              setReviews(response.data); // Set the fetched reviews in state
            } catch (error) {
              console.error('Error fetching reviews:', error);
            }
          };
        fetchReviews();
    }, []);

    const handleFormData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/reviews', data);
            console.log(res);
            if(res.status === '400') {
                alert(res.data.message);
            } else {
                alert(res.data.message);
                setReview(...review, res.data.formData);
                setData('');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    }
console.log(reviews);
    return (
        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20 bgImg bg-[url('./assets/CourseBg.jpg')]">
            <div className='flex flex-col items-center justify-center border rounded-lg w-[500px] h-[600px] mx-auto mt-[50px] bg-transparent backdrop-blur-[5px] text-white'>
            <h2 className='text-center text-headingColor text-3xl border-b border-[#3e3939] w-[95px] mb-10'>Review</h2>
              <form onSubmit={e => handleReviewSubmit(e)}>
                <div className="relative mb-8 ">
                    <input type="text" name='name' id="name" onChange={e => handleFormData(e)} className="block px-2.5 pb-2.5 pt-4 w-[400px] text-sm text-textColor bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="name" className="absolute text-sm duration-300 transform -translate-y-8 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Full Name</label>
                </div>
                <div className="relative mb-8 ">
                    <input type="text" name='message' id="message" onChange={e => handleFormData(e)} className="block px-2.5 pb-2.5 pt-4 w-[400px] text-sm text-textColor bg-transparent rounded-lg border border-[#ccc] focus:outline-none focus:border-blue-600 peer" placeholder=" " maxLength={150} />
                    <label htmlFor="message" className="absolute text-sm duration-300 transform -translate-y-8 scale-125 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-125 peer-focus:-translate-y-8 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Feedback</label>
                </div>
                <div className='flex items-center justify-center'>
                  <button type='reset' className='btn w-[180px] mt-4'>Reset</button>
                  <button type='submit' className='btn w-[180px] mt-4'>Submit</button>
                </div>
              </form>
            </div>
            
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="flex flex-col overflow-hidden shadow-xl bg-white rounded-lg mt-10 md:mt-20"
          >
            <div className="p-6">
              <blockquote className="text-lg leading-relaxed text-gray-900">
                “{review?.message}”
              </blockquote>
            </div>
            <div className="px-6 pb-6 pt-4">
              <p className="text-base font-bold text-gray-900">{review?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    )
}
export default Review;