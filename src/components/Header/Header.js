import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { UserContex } from '../../AuthContex/AuthContex';
const Header = () => {
  const {user,logOut} = useContext(UserContex);
  // console.log(logOut);
  const handleLogOut=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand ><Link to='/'>Travel Expert</Link></Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            {
              user?.email?
              <Button onClick={handleLogOut}  variant='primary' >LogOut</Button>
              :
              <>
              <Nav.Link ><Link to='/register'>Register</Link></Nav.Link>
                        <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
              </>
            }
            
            
            
            
           
      


          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;