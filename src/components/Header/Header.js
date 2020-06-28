import React, { Component } from "react";
import { Link } from "react-router-dom";

// Header component

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Movies</h1>
        <Link exact to="/"><button>Home</button></Link>
      </header>
    )
  }
}

export default Header;