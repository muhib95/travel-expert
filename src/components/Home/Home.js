import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Places from '../Places/Places';


const Home = () => {
  const places=useLoaderData();
  return (
    <div>
     <h2>Total places: {places.length}</h2>
    
     <div className='d-flex justify-content-around'>
     {
      places.map(place=><Places key={place.id} place={place}></Places>)
     }
     </div>
    
   
     
   
    
   

    </div>
  );
};

export default Home;