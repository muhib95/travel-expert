import React from 'react';

const Hotel = ({hotel}) => {
  const {name}=hotel;
  
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Hotel;