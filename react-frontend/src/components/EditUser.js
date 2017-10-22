import React from 'react'

class EditUser extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      user: props.selectedUser,
      selectedUser: props.selectedUser
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
    this.props.handleClick()
    this.props.handleEdit(this.state)
  }

render(){
  console.log(this.props)
  return(
    <form className="edit-user-form" onSubmit={this.handleSubmit}>
    <label>
      First Name:
    </label>
      <input type="text" name="first" value={this.state.user.first} onChange={(event) => this.handleChange(event)}/>
    <br/>
    <label>
      Last Name:
      <input type="text" name="last" value={this.state.user.last} onChange={(event) => this.handleChange(event)}/>
    </label>
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
  <input type="submit" value="Save" />
    </form>
  )
}
}

export default EditUser
