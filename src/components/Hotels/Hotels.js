import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
  const hotels=useLoaderData();
  // console.log(hotels);
  return (
    <div>
      Hotels
      
        <h2>{hotels.length}</h2>
        {
          hotels.map(hotel=><Hotel key={hotel.hid} hotel={hotel}></Hotel>)
        }
      
    </div>
  );
};

export default Hotels;