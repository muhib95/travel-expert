import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContex } from '../AuthContex/AuthContex';

const PrivateRouter = ({children}) => {
  const {user}=useContext(UserContex);
  let location = useLocation();
if(user){
  return children;
}
else{
  return  <Navigate to="/login" state={{ from: location }} replace />;
}
};

export default PrivateRouter;