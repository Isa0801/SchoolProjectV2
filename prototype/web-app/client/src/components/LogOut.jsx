import React from 'react';
import { Redirect} from 'react-router-dom';
import AuthService from '../Services/AuthService';

const Logout = () => {

  AuthService.logout().then(data => {
    console.log(data);
  });

  

  return (<Redirect to="/" />);

};

export default Logout;
