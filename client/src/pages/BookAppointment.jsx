import React from 'react'

const BookAppointment = () => {

  return (
    <div className="flex items-center bgImg bg-[url('./assets/CardBg.jpg')] h-screen">
        <div className='flex flex-col items-center justify-center w-[700px] h-[800px] border border-[#3e3939] rounded-xl mx-auto px-16 py-12 bg-transparent backdrop-blur-[5px]' >
        <h2 className='text-center text-headingColor text-3xl border-b border-[#3e3939] w-[255px] mb-10'>Book Appointment</h2>
            <form>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='name' className='text-xl w-28'>
                        Name :
                    </label><input type="text" id='name' className='bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]' />
                </div>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='email' className='text-xl w-28'>
                        E-mail :
                    </label><input type="email" id='email' className='bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]' />
                </div>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='number' className='text-xl w-28'>
                        Phone No :
                    </label><input type="text" id='number' className='bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]' />
                </div>
                <div className='flex items-start gap-5 mb-5'>
                    <label htmlFor='address' className='text-xl w-28'>
                        Address :
                    </label><textarea id='address' className='bg-[#e6e6fa] p-1 px-2 w-[400px] h-[80px] rounded-lg outline-none border border-[#3e3939]' maxLength={150} />
                </div>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='date' className='text-xl w-28'>
                        Date :
                    </label><input type='date' id='date' className='bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]' />
                </div>
                <div className='flex items-center gap-5 mb-5'>
                    <label htmlFor='date' className='text-xl w-28'>
                        Time :
                    </label>
                    <select className='bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]'>
                        {/* <option>select time slot</option> */}
                        <option>10:00 am - 11:00 am</option>
                        <option>11:00 am - 12:00 pm</option>
                        <option>12:00 pm - 13:00 pm</option>
                        <option>13:00 pm - 14:00 pm</option>
                        <option>14:00 pm - 15:00 pm</option>
                        <option>15:00 pm - 16:00 pm</option>
                        <option>18:00 pm - 19:00 pm</option>
                        <option>19:00 pm - 20:00 pm</option>
                        <option>20:00 pm - 21:00 pm</option>
                    </select>
                </div>
                <div className='flex items-start gap-5 mb-5'>
                    <label className='text-xl w-28'>
                        Services :
                    </label>
                    <div className='flex flex-col bg-[#e6e6fa] p-1 px-2 w-[400px] rounded-lg outline-none border border-[#3e3939]'>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" value="Manicure & Pedicure" />
                            <label>Manicure & Pedicure</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" />
                            <label>Beauty Facial</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" />
                            <label>Bridal Pacakge</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" />
                            <label>Hair spa</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" />
                            <label>Makeup</label>
                        </span>
                        <span className='flex items-center gap-3'>
                            <input type="checkbox" />
                            <label>Hair Style</label>
                        </span>    
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full justify-around'>
                    <input type='reset' value="Reset" className='btn' />
                    <input type='submit' value="Submit" className='btn' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default BookAppointment