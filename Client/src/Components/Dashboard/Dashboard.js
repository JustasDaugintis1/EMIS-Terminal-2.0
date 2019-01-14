import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {


  render() {
    const { user } = this.props.auth;

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
             <div className="col-md-12">
                <h1 className="display-4">Dashboard</h1>
                <p className="lead text-muted">Welcome {user.name} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {} )(Dashboard)