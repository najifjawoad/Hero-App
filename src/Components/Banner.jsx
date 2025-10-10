import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div className='max-w-[1280px] mx-auto '>
            <h2 className='text-center text-6xl font-bold mt-17 '>We Build <br />
   <span className='text-[#9F62F2] '>Productive</span> Apps</h2>
   <p className='text-center mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
 
   <div className="flex justify-center items-center gap-3 mt-3">

  <a
    href="https://play.google.com/store"
    target="_blank"
    rel="noopener noreferrer"
    className="btn bg-[#3DDC84] text-white hover:bg-[#34C275]"
  >
   <FaGooglePlay /> Google Play
  </a>


  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn bg-black text-white hover:bg-gray-800"
  >
    <FaAppStoreIos />App Store
  </a>
</div>




 <div className='flex justify-center mt-9 px-4 sm:px-0'>
  <img src={hero} alt="Hero Banner" className='w-full max-w-xl' />
</div>

<div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-[#5B21B6] to-[#9333EA] text-white py-16 px-4 sm:px-0'>
  <h1 className='text-center font-bold text-2xl sm:text-3xl mb-10'>
    Trusted by Millions, Built for You
  </h1>

  <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-9 text-center'>
    <div className='p-4'>
      <p className='text-sm sm:text-base'>Total Downloads</p>
      <h1 className='text-3xl sm:text-4xl font-bold'>29.6M</h1>
      <p className='text-sm sm:text-base'>21% more than last month</p>
    </div>
    <div className='p-4'>
      <p className='text-sm sm:text-base'>Active Users</p>
      <h1 className='text-3xl sm:text-4xl font-bold'>12.3M</h1>
      <p className='text-sm sm:text-base'>15% more than last month</p>
    </div>
    <div className='p-4'>
      <p className='text-sm sm:text-base'>Positive Reviews</p>
      <h1 className='text-3xl sm:text-4xl font-bold'>98%</h1>
      <p className='text-sm sm:text-base'>Rated 4.8+ across platforms</p>
    </div>
  </div>
</div>

<div className='px-4 sm:px-0'>
  <h2 className='text-center text-xl sm:text-2xl font-bold mt-6'>Trending Apps</h2>
  <p className='text-center text-[#627382] text-sm sm:text-base'>Explore All Trending Apps on the Market developed by us</p>
</div>

      

        </div>
      
    );
};

export default Banner;