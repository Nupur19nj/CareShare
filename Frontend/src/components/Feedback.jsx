import React, { useState } from 'react';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    setEmail('');
    setFeedback('');
  };

  return (
    <div className='w-full py-16 text-black px-4 bg-white' id='Contact'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>
            Feedback
          </h1>
          <p className='text-black'>Enter your Email and Feedback:</p>
        </div>
        <div className='my-4'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <input
              className='placeholder-white p-3 rounded-md text-black bg-[#816d8a]'
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              className='placeholder-white p-3 rounded-md text-black bg-[#816d8a]'
              placeholder='Enter Feedback'
              value={feedback}
              onChange={handleFeedbackChange}
            />
            <button
              type='submit'
              className='bg-[black] text-white rounded-md font-medium w-full py-3'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
