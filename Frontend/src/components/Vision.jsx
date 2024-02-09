import React from 'react';
import vision from '../assets/kids.jpg';

const Vision = () => {
  return (
    <div className='w-full bg-white py-16 px-4 min-h-screen' id='vision'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 h-full'>
        <img className='w-[500px] mx-auto my-4' src={vision} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#D298D3] text-3xl font-bold'>Our Vision</p>
          <p className='mt-10'>
          Our vision is to unite generosity worldwide by connecting individuals with NGOs in need. We believe every act of kindness, no matter how small, creates meaningful change. Through our platform, we aspire to empower people to make a difference, fostering a more compassionate and equitable world for all.
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Vision;
