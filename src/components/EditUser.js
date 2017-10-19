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
      if (parameter){
        return {
          user: {...prevState.user,
            [parameter]: {...prevState.user[parameter],
              [key]: value
            }
        }
      }
    } else {
        return {
          user: {...prevState.user,
            [key]: value
          }
        }
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    console.log("through handleSubmit")
  }

render(){
  return(
    //need an onSubmit function that updates the user information
    <form className="edit-user-form" onSubmit={this.handleSubmit}>
    <label>
      Title:
    </label>
      <input type="text" name="title" value={this.state.user.name.title} onChange={(event) => this.handleChange(event, "name")}/>
    <br/>
    <label>
      First Name:
    </label>
      <input type="text" name="first" value={this.state.user.name.first} onChange={(event) => this.handleChange(event, "name")}/>
    <br/>
    <label>
      Last Name:
      <input type="text" name="last" value={this.state.user.name.last} onChange={(event) => this.handleChange(event, "name")}/>
    </label>
    <br/>
    <label>
        Gender:
      <input type="text" name="gender" value={this.state.user.gender} onChange={(event) => this.handleChange(event)}/>
    </label>
    <br/>
    <label>
        Street Address:
      <input type="text" name="street" value={this.state.user.location.street} onChange={(event) => this.handleChange(event, "location")}/>
    </label>
    <br/>
    <label>
        City:
      <input type="text" name="city" value={this.state.user.location.city} onChange={(event) => this.handleChange(event, "location")}/>
    </label>
    <br/>
    <label>
        State:
      <input type="text" name="state" value={this.state.user.location.state} onChange={(event) => this.handleChange(event, "location")}/>
    </label>
    <br/>
    <label>
        Post Code:
      <input type="text" name="postcode" value={this.state.user.location.postcode} onChange={(event) => this.handleChange(event, "location")}/>
    </label>
    <br/>
  <input type="submit" value="Submit" />
    </form>
  )
}
}

export default EditUser
