import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to check login status
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  // Call the function to check login status when the component mounts
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update login status
  };
  const handleLogin = () => {
    <Link to={'/register'}>Login</Link>;
  };
  return (
    <div
    className="relative bg-[url(./assets/donate.jpg)]  bg-cover bg-center bg-fixed h-screen"
    id="home"
  >
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Easy Donation for Those in Need!
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Join us in making a difference. Your donations help change lives.
        </p>
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#d25f5f] text-white px-6 py-3 rounded-md font-medium mb-4 transition duration-300 hover:bg-opacity-80"
          >
            {showDropdown ? "Close Categories" : "See Categories"}
          </button>
          {showDropdown && (
            <div className="absolute z-10 bg-white shadow-md rounded-md py-2 w-48 text-gray-800">
              <ul>
                <li
                  onClick={() => handleCategorySelect("Clothing")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  Clothing
                </li>
                <li
                  onClick={() => handleCategorySelect("Food")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  Food
                </li>
                <li
                  onClick={() => handleCategorySelect("Books")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  Books
                </li>
                <li
                  onClick={() => handleCategorySelect("Education")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  Education
                </li>
                <li
                  onClick={() => handleCategorySelect("Monetary")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                >
                  Monetary
                </li>
              </ul>
            </div>
          )}
          {selectedCategory && (

            <Link to={`/${selectedCategory}`}>

              <button className="bg-[#d25f5f] text-white px-6 py-3 rounded-md font-medium mt-4 transition duration-300 hover:bg-opacity-80">
                View {selectedCategory} Category
              </button>
            </Link>
          )}
        </div>
        {isLoggedIn && (
            <button onClick={handleLogout} className='bg-[#d25f5f]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
              Logout
            </button>
          )}
          {!isLoggedIn && (
            <Link to="/login"><button className='bg-[#d25f5f]  text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Login/Sign-up
          </button></Link>
          )}
      </div>
    </div>
  </div>
);
};

export default Hero;