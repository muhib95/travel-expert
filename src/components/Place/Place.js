
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Place = () => {


  const {id,name,pic,dis}=useLoaderData();
    return (
      <Container>
      <Row>
        <Col>        <Card className='ml-20px' style={{ width: '30rem' }} >
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {dis}
          </Card.Text>
        </Card.Body>
        
        
      </Card></Col>
        <Col>Hotel Find
       <Link to={`/hotels/${id}`}>Find Hotel</Link>
        </Col>
      </Row>
     
    </Container>
     
    
 
    );
};

export default Place;