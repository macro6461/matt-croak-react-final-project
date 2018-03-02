import React from 'react'
import { Link } from 'react-router-dom'

class EditUser extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      user: this.props.currentUser
    }
  }

  handleChange = (event, parameter) => {
    let value = event.target.value
    let key = event.target.name
    this.setState((prevState) => {
        return {
          user: {...prevState.user,
            [key]: value
          }
        }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleEdit(this.state)
  }

  handleDelete = (event) => {
     
    this.props.handleUserDelete(this.state)
  }

render(){
  return(

    <div className="edit-page-form">
      <img src={this.state.user.picture_url}/>
    <form className="edit-user-form">
    <label>
      Name:
    </label>
      <input type="text" name="name" value={this.state.user.name} onChange={(event) => this.handleChange(event)}/>
      <label>
        Age:
      </label>
        <input type="text" name="age" value={this.state.user.age} onChange={(event) => this.handleChange(event)}/>
    <br/>
    <label>
        Gender:
      <input type="text" name="gender" value={this.state.user.gender} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        City:
      <input type="text" name="city" value={this.state.user.city} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        State:
      <input type="text" name="state" value={this.state.user.state} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        Picture URL:
      <input type="text" name="picture_url" value={this.state.user.picture_url} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        Bio:
      <input type="text" name="bio" value={this.state.user.bio} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        Password:
      <input type="text" name="password" value={this.state.user.password} onChange={(event) => this.handleChange(event)}/>
    </label>
    <button className="save-button" type="submit" value="Save" onClick={this.handleSubmit}>Save</button>
  <br/>
  <br/>
    <Link className="delete-button" to="/" onClick={this.handleDelete}>Delete Account</Link>
    </form>
    </div>
  )
}
}

export default EditUser
