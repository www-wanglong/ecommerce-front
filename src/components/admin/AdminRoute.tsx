import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';
import { Jwt } from '../../store/models/auth';

interface AdminRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

function AdminRoute({ component: Component, ...rest }: AdminRouteProps) {
  return (
    <Route {...rest} render={ props => {
        const auth = isAuth()
        if (auth) {
          const { user: { role } } = auth as Jwt
          if (role === 1) {
            return <Component {...props} />
          }
        }
        return <Redirect to="/signIn" />
      }}
    />

  );
}

export default AdminRoute;
