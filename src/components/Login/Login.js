import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContex } from '../../AuthContex/AuthContex';

const Login = () => {
  const [error,setError]=useState('');
  let navigate = useNavigate();
  let location = useLocation();
  const {logIn}=useContext(UserContex);
  let from = location.state?.from?.pathname || "/";
  const handleLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
    .then((result) => {
      // Signed in 
      form.reset();
      setError('');
      navigate(from, { replace: true });
      // ...
    })
    .catch((error) => {
     console.log(error)
     setError(error.message);
    });
  
      }
  return (
    <div className="w-50 mx-auto">
      login
      <Form onSubmit={handleLogIn}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>{error}</p>
    </Form>
    </div>
  );
};

export default Login;