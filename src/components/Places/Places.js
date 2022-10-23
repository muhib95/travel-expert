import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Places = ({place}) => {
  const {id,name,pic,dis}=place;
  // console.log(place);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {dis}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link ><Link to={`/place/${id}`}>Visit</Link></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Places;