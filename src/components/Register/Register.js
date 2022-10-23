import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContex } from '../../AuthContex/AuthContex';

const Register = () => {
  const [error,setError]=useState('');
  const {register}=useContext(UserContex);
  
  const handleRegister=(event)=>{
event.preventDefault();
const form=event.target;
const email=form.email.value;
const password=form.password.value;
register(email,password)
.then((result) => {
  console.log(result.user);
  form.reset();
  setError('');

})
.catch((error) => {
console.error(error);
setError(error.message);
  // ..
});
  }
  return (
    <div className="w-50 mx-auto">
      Register
      <Form onSubmit={handleRegister}>
      
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

export default Register;