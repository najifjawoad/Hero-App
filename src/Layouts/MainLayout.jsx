import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation,  } from 'react-router';

const MainLayout = () => {
   const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        setLoading(true);

        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timer);
    }, [location]);
    return (
<div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <progress className="progress w-56 sm:w-72"></progress>
        </div>
      )}

      <div className={`max-w-[1280px] w-full px-4 md:px-8 lg:px-12 flex-1 mx-auto py-4 md:py-8 lg:py-12 ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
        <Outlet />
      </div>

      <Footer />
    </div>
   
   
    );
};

export default MainLayout;