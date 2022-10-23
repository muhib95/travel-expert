import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Place from '../Place/Place';
import Hotels from '../Hotels/Hotels';
import PrivateRouter from '../../PrivateRoute/PrivateRouter';
export const router=createBrowserRouter([

{
  path:'/',
  element:<Main></Main>,
  errorElement:<Error></Error>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('http://localhost:5000/')
    },
    {
      path:'/place/:id',
      element:<Place></Place>,
      loader:({params})=>fetch(`http://localhost:5000/place/${params.id}`)

    },
    {
      path:'/hotels/:id',
      element:<PrivateRouter><Hotels></Hotels></PrivateRouter>,
      loader:({params})=>fetch(`http://localhost:5000/hotels/${params.id}`)

    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]
}


]);

