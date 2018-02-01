import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.isConfirmed && <ConfirmEmailMessage />}
        <h1>Hello world</h1>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isConfirmed: !state.user.confirmed,
});

export default connect(mapStateToProps)(DashboardPage);
