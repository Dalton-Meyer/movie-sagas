import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Details from '../Details/Details.js';
import Header from '../Header/Header.js';
import Edit from '../Edit/Edit.js';

class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <Header />
        <div className="App">
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
