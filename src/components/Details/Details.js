import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Details extends Component {
  componentDidMount(){
    console.log(this.props.details);
  }
  
  render() {
    return (
      // setting the route to /details
      <Route path="/details">
        {/* {JSON.stringify(this.props.details.title)} */}
        {/* <h1>{this.props.details}</h1> */}
        <div>

          {this.props.details.map((x) => {
          return (
           <div>
              <h1>{x.title}</h1>
              <img src={x.poster}/>
              <p>{x.description}</p>
              <Link to="edit"><button>Edit</button></Link>
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

/* Mapping through genres because there can be multiple genres that come through as an array*/
                              
/* Mapping through the movie deatils to display each item */
                              
