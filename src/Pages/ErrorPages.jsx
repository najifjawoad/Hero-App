import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Components/Navbar';
import appErr from '../assets/App-Error.png'

const ErrorPages = () => {
    return (
        <div>
   
        <div className="w-full h-screen flex flex-col items-center justify-center text-white">
   
      <img src={appErr} alt="" />
      
      <p className="text-xl md:text-2xl mb-6 text-gray-900 font-bold">
        Oops! App not found.
      </p>
      <p className='text-gray-900 mb-6'>The app you are looking for is not available</p>
      
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

export default ErrorPages;