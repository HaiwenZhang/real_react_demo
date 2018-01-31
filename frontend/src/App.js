import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import TestPage from './components/pages/TestPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


const App = ({ location }) => (
  <div className="ui container">
    <Route exact location={location} path="/" component={HomePage} />
    <GuestRoute location={location} path="/login" component={LoginPage} />
    <UserRoute location={location} path="/dashboard" component={DashboardPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
