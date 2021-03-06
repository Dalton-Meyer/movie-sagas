import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Edit extends Component {
    // setting local state for the inputs
    state = {
        title: '',
        description: '',
        id: 0,
        redirect: false
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
    // when a user changes the existing title or description,
    // set state to that user input
    handleChange = (param, event) =>{
        this.setState({
            [param]: event.target.value
        })
    }
    
    // on submit, dispatch to EDIT_MOVIE
    // send a axios put to edit the information in the database
    handleSubmit = () => {
      if (this.state.title !== '' && this.state.description !== '') {
        this.props.dispatch({type:'EDIT_MOVIE', payload: this.state}) 
        this.setState({redirect: true})
      }else{
        alert('please make sure input are not empty')
      }
    }
    // confirmation box before you edit the movie
    submit = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure you want to edit this?.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.handleSubmit()
            },
            {
              label: 'No',
              onClick: () => this.setState({redirect: true})
            }
          ]
        });
      };
      //uses the Redirect to back to details page with the confirmation box
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to = "/details" />
        }
      }

  render() {
    return (
      <div className='edit'>
          {this.renderRedirect()}
          <h3>Title</h3>
        <input type="text" className="titleInput" value={this.state.title} onChange={(event)=>this.handleChange("title",event)}/>
        <br/>
        <h3>Description</h3>
        <textarea className="descriptionInput" rows="20" cols="40" value={this.state.description} onChange={(event)=>this.handleChange("description",event)}></textarea>
        <br/>
        <Link to="/details"><button className="btn btn-primary btn-lg">Back to Details</button></Link> 
        <br/> <br/>
        <button className="btn btn-primary btn-lg" onClick={()=>this.submit()}>Save</button>
        
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