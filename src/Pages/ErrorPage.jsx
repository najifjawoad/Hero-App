// src/Components/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router';
import errPage from '../assets/error-404.png'
import Navbar from '../Components/Navbar';

const ErrorPage = () => {
  return (
    
<div>
    <Navbar></Navbar>
        <div className="w-full h-screen flex flex-col items-center justify-center text-white">
   
      <img src={errPage} alt="" />
      {/* Error message */}
      <p className="text-xl md:text-2xl mb-6 text-gray-900 font-bold">
        Oops! Page not found.
      </p>
      <p className='text-gray-900 mb-6'>The page you are looking for is not available</p>
      {/* Back to home button */}
      <Link
     
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/50"
      >
        Go Back Home
      </Link>
    </div>
</div>
  );
};

export default ErrorPage;
