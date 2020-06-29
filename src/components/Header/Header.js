import React, { Component } from "react";
import { Link } from "react-router-dom";

// this is the header component that displays on every page

class Header extends Component {
  render() {
    return (
        <div className='blackBg nav-radius'>
      <header className='blackBg m-0 p-3'>
        <h1>Movies</h1>
        <Link exact to="/"><button className="btn btn-primary btn-lg">Home</button></Link>
      </header>
      </div>
    )
  }
}

export default Header;