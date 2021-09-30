import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard';
import AdminRoute from './components/admin/AdminRoute';
import Dashboard from './components/admin/Dashboard';
import PrivateRoute from './components/admin/PrivateRoute';
import Home from './components/core/Home';
import Shop from './components/core/Shop';
import SignIn from './components/core/SignIn';
import SignUp from './components/core/SignUp';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
