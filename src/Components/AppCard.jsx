import React from 'react';
import { FaDownload, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
 const{image,title,downloads,ratingAvg,id} = app
 
    return (
   <Link to={`/app/${id}`}>
        <div className="card bg-base-100  shadow-sm hover:scale-103 transition ease-in-out">
  <figure className='h-48 overflow-hidden'>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
      
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline text-[#00D390]"><FaDownload />{downloads}</div>
      <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1]"><FaRegStar /> {ratingAvg}</div>
    </div>
  </div>
</div>
   </Link>
    );
};

export default AppCard;