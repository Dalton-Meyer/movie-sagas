import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Edit extends Component {
    // setting local state for the inputs
    state = {
        title: '',
        description: '',
        id: 0
    }

    componentDidMount(){
     
        console.log(this.state);
        this.changeState()
    }
    compen
    
    changeState = () => {
        let value = 0
     for (let i = 0; i < this.props.details.length; i++) {
         const element = this.props.details[i];
        let value = element.id
        let title = element.title
        let description = element.description
        console.log(value);
        
       return this.setState({
         title: title,
         description: description,
         id: value
        })
     }
    }
    // when a use enters in a new title or description,
    // set state to that user input
    handleChange = (param, event) =>{
        this.setState({
            [param]: event.target.value
        })
    }
    
    // on submit, dispatch to EDIT_MOVIE
    handleSubmit = () => {
      if (this.state.title !== '' && this.state.description !== '') {
        this.props.dispatch({type:'EDIT_MOVIE', payload: this.state}) // TODO: need to finish dispatch FETCH_DETAILS
      }else{
        alert('please make sure input are not empty')
      }
    }

  render() {
    return (
      <div>
        <input type="text" className="titleInput" value={this.state.title} onChange={(event)=>this.handleChange("title",event)}/>
        <label for="titleInput">Title</label>
        <textarea className="descriptionInput" rows="20" cols="40" value={this.state.description} onChange={(event)=>this.handleChange("description",event)}></textarea>
        <label for="descriptionInput">Description</label>
        <Link to="/details"><button onClick={()=>this.handleSubmit()}>Save</button></Link>
        <Link to="/details"><button>Back to Details</button></Link>
      </div>
    )
  }
}

// bringing in the movie details to use as props
const mapStateToProps = (state) => {
    return {
      details: state.details,
    };
  };
  
  export default connect(mapStateToProps)(withRouter(Edit));