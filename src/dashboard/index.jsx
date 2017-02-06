import React from 'react';
import { connect } from 'react-redux';
import accountActions from '../account/actions';
import Navigation from './components/NavigationBar';

const Dashboard = props => (
  <div className="dashboard">
    <Navigation {...props} />
  </div>
);

export default connect(state => state, { logout: accountActions.logout })(Dashboard);
