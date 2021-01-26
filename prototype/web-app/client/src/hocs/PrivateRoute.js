import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component: Component, roles, ...rest}) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated)
        return <Redirect to={{ pathname: '/login', state: {from: props.location} } } />

      if (!roles.includes(user.role))
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />

      return <Component {...rest} {...props} />
    }} />
  )
}

export default PrivateRoute;