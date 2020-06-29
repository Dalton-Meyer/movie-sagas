import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import { HashRouter as Router, Route } from "react-router-dom";
import Details from '../Details/Details.js';
import Header from '../Header/Header.js';
import Edit from '../Edit/Edit.js';

class App extends Component {

  // displays all the information to the dom
  // also has all the routes set up to go to each page
  render() {
    return (
      <Router>
        <Header />
        <div className="container bg overflow-auto h-75 blackBg body-radius p-3">
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
