import React, { Component } from "react";
import { Link } from "react-router-dom";

// this is the header component that displays on every page

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