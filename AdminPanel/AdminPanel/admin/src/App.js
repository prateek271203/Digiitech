// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Authentication from './Components/Authentication/Authentication';
import ForgetPasswordForm from './Components/ForgetPassword/ForgetPasswordForm';
import NewPasswordForm from './Components/NewPasswordScreen/NewPasswordForm';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/forgotPassword" component={ForgetPasswordForm} />
        <Route exact path="/newPassword" component={NewPasswordForm} />
        <Route exact path="/Dashboard" component={Dashboard} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
};

export default App;
