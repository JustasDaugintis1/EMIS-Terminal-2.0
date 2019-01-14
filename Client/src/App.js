import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setCurrentUser, logoutUser } from './Actions/authActions';
import jwt_decode from 'jwt-decode';
import setAtuhToken from './utils/setAuthToken';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Landing from './Components/Layout/Landing';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './Components/Dashboard/Dashboard';
import PatientFinder from './Components/Search/patientFinder'
import Patients from './Components/Search/Patients'

// Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    //TODO: Clear current Profile

    //Redicret to Login
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router >
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={ Landing }/>
            <div className="container">
            <Route exact path="/register" component = { Register }/>
            <Route exact path="/login" component = { Login }/>
            <Route exact path="/dashboard" component = { Dashboard }/>
            <Route exact path="/search" component = { PatientFinder }/>
            <Route exact path="/patients" component ={ Patients }/>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
