import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import image from "../images/crosspay-high-resolution-logo-transparent.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black'>
      {/* <h1 className='w-full text-3xl font-bold text-[#D298D3] '><img src={image} width={500} height={500}></img></h1> */}
      <div className='flex items-center p-2 gap-5 text-white'>
      <Link to ="home" spy={true} smooth ={true} duration={500} className='hover:text-[#d25f5f]  transition-all cursor-pointer'>Home</Link>
                <Link to ="vision" spy={true} smooth ={true} duration={500} className='hover:text-[#d25f5f]  transition-all cursor-pointer'>Vision</Link>
                <Link to ="learn" spy={true} smooth ={true} duration={500} className='hover:text-[#d25f5f]  transition-all cursor-pointer'>Learn</Link>
                 <Link to ="Contact" spy={true} smooth ={true} duration={500} className='hover:text-[#d25f5f]  transition-all cursor-pointer'>Contact</Link>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Learn</li>
          <li className='p-4 border-b border-gray-600'> History</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;