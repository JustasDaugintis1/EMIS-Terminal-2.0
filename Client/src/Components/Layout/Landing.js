import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Landing extends Component {

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('dashboard')
    }
  }

  render() {
    return (
      <div>
          <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Emis Terminal 
            </h1>
            <p className="lead">its getting there.....</p>
            <hr />
            <a href="register" className="btn btn-lg btn-info mr-2">Sign Up</a>
            <a href="login" className="btn btn-lg btn-light">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing);