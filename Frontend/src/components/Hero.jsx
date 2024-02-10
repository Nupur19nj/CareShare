import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className='text-white bg-[url(./assets/donate.jpg)] h-screen bg-cover bg-no-repeat ' id='home'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#d25f5f] font-bold p-2 text-xl'>
          Join us for
        </p>
        <Link to="/Payment">Start payment</Link>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>
          Easy donation for the people in need!
        </h1>
        <div className='flex flex-col items-center'>
          <p className='md:text-2xl sm:text-3xl text-xl font-bold py-4'>
            Donate
          </p>
          {showDropdown && (
            <div className="absolute z-10 bg-black rounded-md shadow-lg text-white">
              <ul>
                <li onClick={() => handleCategorySelect('Clothing')} className="py-2 px-4 cursor-pointer hover:bg-gray-200">Clothing</li>
                <li onClick={() => handleCategorySelect('Food')} className="py-2 px-4 cursor-pointer hover:bg-gray-200">Food</li>
                <li onClick={() => handleCategorySelect('Books')} className="py-2 px-4 cursor-pointer hover:bg-gray-200">Books</li>
                <li onClick={() => handleCategorySelect('Education')} className="py-2 px-4 cursor-pointer hover:bg-gray-200">Education</li>
                <li onClick={() => handleCategorySelect('Monetary')} className="py-2 px-4 cursor-pointer hover:bg-gray-200">Monetary</li>
                {/* Add more categories as needed */}
              </ul>
            </div>
          )}
          <button onClick={() => setShowDropdown(!showDropdown)} className='bg-[#d25f5f]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            {showDropdown ? 'Close Categories' : 'See Categories'}
          </button>
          {selectedCategory && (
            <Link to={`/${selectedCategory}`}>
              <button className='bg-[#d25f5f]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                View {selectedCategory} Category
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
