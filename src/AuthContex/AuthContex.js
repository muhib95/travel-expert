import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../components/firebase/firebase.init';
const auth=getAuth(app);
export const UserContex=createContext();
const AuthContex = ({children}) => {
  const [user,setUser]=useState([]);
  const register=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })
    return ()=> unSubscribe();
  },[])
  const logIn=(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);

  }
  const logOut=()=>{
    return signOut(auth);
  }


  const userInfo={user,register,logIn,logOut};
  return (
    
 
    
    <UserContex.Provider value={userInfo}>
      {children}
      </UserContex.Provider>
    
  );
};

export default AuthContex;