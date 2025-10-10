import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { toast, ToastContainer } from 'react-toastify';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import rev from '../assets/icon-review.png'


const AppsDetails = () => {
   const [installed,setInstalled] = useState(false)
    
    const {id} = useParams()
    const {apps,loading} = useApps()
    const app = apps.find(a=>String(a.id)===id)
    console.log(app)

    if(loading) return <p>Loading...</p>
    const {image,title,downloads,companyName,reviews,ratings,description,ratingAvg,size} = app 


   

    
  const handleAddToWishList =()=>{
    const existingList = JSON.parse(localStorage.getItem('wishlist'))
    let updatedList = []
    if(existingList){
      const isDuplicate = existingList.some(a=>a.id===app.id)
      if(isDuplicate) return  alert('sorry')
       updatedList =[...existingList,app]
    }else{
      updatedList.push(app)
    }

    



    localStorage.setItem('wishlist',JSON.stringify(updatedList))
    setInstalled(true);
  toast.success('App installed successfully!');
   
    
  }

  
    return (

<div>
 
<div className='flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-0'>
  <div className='flex-shrink-0'>
    <img src={image} alt={title} className='w-full max-w-xs sm:max-w-[120px] rounded-lg' />
  </div>
  
  <div className='mt-4 sm:mt-0 sm:ml-6 flex-1'>
    <h2 className='text-xl sm:text-2xl font-bold'>{title}</h2>
    <p className='text-[#627382] text-sm sm:text-base'>
      Developed by <span className='text-[#9F62F2] font-semibold'>{companyName}</span>
    </p>
    
    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3 text-sm'>
      <div className='flex items-center gap-2'>
        <img src={download} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
        <p className='text-sm sm:text-base'>
          Downloads <br /> 
          <span className='text-xl sm:text-2xl font-bold'>{downloads.toLocaleString()}</span>
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <img src={rating} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
        <p className='text-sm sm:text-base'>
          Ratings <br /> 
          <span className='text-xl sm:text-2xl font-bold'>{ratingAvg.toLocaleString()}</span>
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <img src={rev} alt="" className='w-6 h-6 sm:w-8 sm:h-8' />
        <p className='text-sm sm:text-base'>
          Total Reviews <br /> 
          <span className='text-xl sm:text-2xl font-bold'>{reviews.toLocaleString()}</span>
        </p>
      </div>
    </div>

    <button 
      onClick={handleAddToWishList} 
      disabled={installed} 
      className='btn w-full sm:w-auto mt-4 sm:mt-6 text-white bg-gradient-to-l from-[#00827A] to-[#64CF68] px-6 py-2 rounded-lg'>
        {installed ? "Installed" : `Install Now ${size}`}
    </button>
  </div>
</div>



  <div style={{width:"100%",height:300}}>
<h2 className='font-semibold mb-3 mt-9'>Ratings</h2>
   <ResponsiveContainer>
    <BarChart data={ratings} layout='vertical' margin={{top:10,right:30,left:48,bottom:10}}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis type="number" />
      <YAxis dataKey='name' type='category'/>
      <Tooltip/>
      <Bar dataKey="count" fill="#FF9800" barSize={22} radius={[0, 8, 8, 0]}>
        <LabelList dataKey='count' position='right' />

      </Bar>

    </BarChart>
   </ResponsiveContainer>
  </div>
  <p className='mt-6'>description:{description}</p>

  <ToastContainer></ToastContainer>
</div>



    );
};

export default AppsDetails;


     





