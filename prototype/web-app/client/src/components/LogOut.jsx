import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import AuthService from '../Services/AuthService';

const Logout = () => {

  // AuthService.logout().then(data => {
  //   console.log(data);
  // });

  
  //window.location.href = useHistory().location();

  let temp = window.location.origin;



  window.location.href = temp + "/login";


  return (<Redirect to="/login" />);

};

export default Logout;
