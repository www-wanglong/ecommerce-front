import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
  return (
    <Route {...rest} render={ props => {
        const auth = isAuth()
        if (auth) {
          return <Component {...props} />
        }
        return <Redirect to="/signIn" />
      }}
    />

  );
}

export default PrivateRoute;
