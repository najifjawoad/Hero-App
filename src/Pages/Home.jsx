import React from 'react';
import Banner from '../Components/Banner';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import useApps from '../hooks/useApps';

const Home = () => {

    // const apps = useLoaderData();
    const {apps} = useApps();
 
    const featuredApps = apps.slice(0,8)
    console.log(apps);
    return (
        <div>
            <Banner></Banner>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-6 '>
             {
            featuredApps.map(app=>(<AppCard key={app.id} app={app}></AppCard>))
           }
          </div>
          <div className='text-center mt-6'>
            <Link to='/apps' className='btn btn-outline bg-[#632EE3] text-white' >Show All</Link>
          </div>
        </div>
    );
};

export default Home;