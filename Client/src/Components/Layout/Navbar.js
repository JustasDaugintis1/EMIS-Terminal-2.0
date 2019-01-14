import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../Actions/authActions';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        //this.props.history.push("/")
    }


    render() {

        const {isAuthenticated, user} = this.props.auth;

        if(!this.props.auth.isAuthenticated){
           //this.props.history.push("/")
         }

        const funcLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="patients">Patients</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="search">Search</Link>
                </li>
            </ul>
        )

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link
                        className="nav-item"
                        to="/"
                        onClick={this
                        .onLogoutClick
                        .bind(this)}
                        className="nav-link">Logout</Link>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        className="nav-link disabled"
                        style={{
                        fontStyle: "italic"
                    }}>Logged in as {user.name}
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="login">Login</Link>
                </li>
            </ul>
        )
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <img
                            src={require("../../img/EMISGroupLogo_icon.png")}
                            style={{
                            width: 26,
                            margin: 10
                        }}alt=""/>
                        <Link className="navbar-brand" to="/">Emis Terminal 2.0</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#mobile-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            {isAuthenticated
                                ? funcLinks
                                : ""}
                        </div>
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            {isAuthenticated
                                ? authLinks
                                : guestLinks}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({auth: state.auth});

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
export default connect(mapStateToProps, {logoutUser})(Navbar);