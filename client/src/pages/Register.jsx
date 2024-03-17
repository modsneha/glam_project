import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        course: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/course-register', formData);
            // navigate('/payment_checkout');
            navigate('/course');
          } catch (error) {
            console.error('Error submitting form:', error);
          }
    }

  return (
    <>
    <div className="flex items-center bgImg bg-[url('./assets/CardBg.jpg')] h-screen">
        <div className='flex flex-col items-center justify-center w-[500px] h-[600px] border border-[#3e3939] rounded-xl mx-auto px-16 py-12 bg-transparent backdrop-blur-[5px]' >
        <h2 className='text-center text-headingColor text-3xl border-b border-[#3e3939] w-[285px] mb-10'>Course Registeration</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='name' className='text-xl w-28'>
                        Name :
                    </label>
                    <input type="text" id='name' name='name' onChange={e => handleChange(e)} className='bg-[#e6e6fa] p-1 px-2 w-[300px] rounded-lg outline-none border border-[#3e3939]' />
                </div>
                <div className='flex items-start gap-5 mb-5'>
                    <label htmlFor='address' className='text-xl w-28'>
                        Address :
                    </label>
                    <input type='text' id='address' name='address' onChange={e => handleChange(e)} className='bg-[#e6e6fa] p-1 px-2 w-[300px] rounded-lg outline-none border border-[#3e3939]' maxLength={150} />
                </div>
                <div className='flex items-start gap-5 mb-5'>
                    <label className='text-xl w-28'>
                        Courses :
                    </label>
                    <div className='flex flex-col bg-[#e6e6fa] p-1 px-2 w-[300px] rounded-lg outline-none border border-[#3e3939]'>
                        <span className='flex items-center gap-3'>
                            <input type="radio" onChange={e => handleChange(e)} name='course' value='Basic' />
                            <label>Basic</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="radio" onChange={e => handleChange(e)} name='course' value='Advance' />
                            <label>Advanced</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="radio" onChange={e => handleChange(e)} name='course' value='Hair Style' />
                            <label>Hair Style</label>
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-[450px] justify-around'>
                    <input type='reset' value="Reset" className='btn' />
                    <input type='submit' value="Submit" className='btn' />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register