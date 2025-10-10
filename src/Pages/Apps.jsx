import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../Components/AppCard';




const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();

  useEffect(() => {
    if (search.trim() !== '') {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // smooth loading feel
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [search]);

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div className='text-center mb-9'>
        <h2 className='font-bold text-3xl'>Our All Applications</h2>
        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className='flex justify-between'>
        <h2><span className='font-bold'>({searchedApps.length})</span> Apps Found</h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search Apps"
          />
        </label>
      </div>


      {loading ? (
        <div className="flex justify-center py-10">
         
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          
          {searchedApps.length === 0 ? (
            <h2 className="text-center text-xl font-semibold mt-10">No Apps Found </h2>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
              {searchedApps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};


export default Apps;