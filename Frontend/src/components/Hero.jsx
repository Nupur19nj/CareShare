import React from 'react';
// import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white bg-[url(./assets/donate.jpg)] h-screen bg-cover bg-no-repeat ' id='home'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#d25f5f] font-bold p-2 text-xl'>
    Join us for
  </p>
  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>
    Easy donation for the people in need!
  </h1>
  <div className='flex justify-center items-center'>
    <p className='md:text-2xl sm:text-3xl text-xl font-bold py-4'>
      Donate
    </p>
          {/* <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Secure!', 'Fast!', 'with Ease!']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <Link to="/dashboard"><button className='bg-[#d25f5f]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See Category</button></Link>
      </div>
    </div>
  );
};


export default Hero;
