import React, {  useState } from 'react';
import { loadWishlist, } from '../utils/localStorage';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegStar } from 'react-icons/fa';

const Installation = () => {
   
    const [wishList,setWishlist] = useState(()=>loadWishlist())
    
    const [sortOrder,setSortOrder] = useState('none')
    
   

    if(!wishList.length) return <p>No App Found</p>


    const sortedItem = (() =>{
        if(sortOrder === 'size-asc'){
            return [...wishList].sort((a,b)=>a.size - b.size)
        }else if(sortOrder === 'size-desc'){
               return [...wishList].sort((a,b)=>b.size - a.size)
        }
        else {
           return wishList
        }
    }) ()
    



    const handleRemove = (id)=>{
        const existingList = JSON.parse(localStorage.getItem('wishlist'))
         let updatedList = existingList.filter(a=>a.id !== id)
        
    // for ui instant update
    
    toast.success('apps uninstalled successfully!');
         //for ui instant 
        
         setWishlist(updatedList)
        
 
     localStorage.setItem('wishlist',JSON.stringify(updatedList))
    
    
    }
    return (
        <div className='space-y-6'>
        <div className='text-center mb-9'>
            <h2 className='font-bold text-3xl'>Your Installed Apps</h2>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='flex justify-between'>
            <h2><span className='font-bold'>({sortedItem.length})</span> Apps Found</h2>
        <label className='form-control w-full max-w-xs' >
        <select className='select select-bordered' value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
            <option value="none">Sort by downloads</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
            </select> 
        
        </label>
        </div>
    
    <div className='space-y-3'>
    {
        sortedItem.map(a=><div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img className='h-[200px]'
      src={a.image}
      alt={a.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{a.title}</h2>
    
    <div>
        <button className='btn m-3'>{a.downloads}</button>
        <button className='btn m-3'>{a.ratingAvg}</button>
        <button className='btn m-3'>{a.size}</button>
    </div>
    <div className="card-actions justify-end">
      <button onClick={() => handleRemove(a.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
      
    </div>
  </div>
</div>)
    }
    </div>
<ToastContainer></ToastContainer>
        
        </div>
    );
};


export default Installation;