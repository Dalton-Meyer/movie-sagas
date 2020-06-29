import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Details extends Component {
  componentDidMount(){
    console.log(this.props.details);
  }
  // maps thru the details global state to get the information
  // the second map, maps thru to display the array of genres onto the DOM.
  
  render() {
    return (
      // setting the route to /details
      <Route path="/details">
        <div>

          {this.props.details.map((x) => {
          return (
           <div>
               <div className='details'>
              <h1 className='text-center'>{x.title}</h1>
              <img  src={x.poster}/>
              <h3 className='text-center'>Description</h3>
              <p className='text-center '>{x.description}</p>
              <Link to="edit"><button className="btn btn-primary btn-lg btn-block">Edit</button></Link>
              </div>
              <h3>Genre</h3>
              <ul>

              {x.genres.map((genre) => {
                return (
                <li>
                  {genre}
                </li>
                )
              })}
              </ul>
            </div>
          )
          })}
        </div>
      </Route>
    );
  }
}

// bringing in the details to use as props
const mapStateToProps = (state) => {

  return {
    details: state.details,
  };
};

export default connect(mapStateToProps)(withRouter(Details));


                              
