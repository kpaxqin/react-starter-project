import React from 'react';
import { connect } from 'react-redux';
import accountActions from '../account/actions';
import Navigation from './components/NavigationBar';

const DashboardComponent = props => (
  <div className="dashboard">
    <Navigation {...props} />
    <div>Hello world</div>
  </div>
);

export { DashboardComponent };

export default connect(state => state, { logout: accountActions.logout })(DashboardComponent);
