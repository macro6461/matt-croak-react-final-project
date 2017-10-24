import React from 'react'


class NewUser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
          name: "",
          gender: "",
          city: "",
          state: "",
          picture_url: "",
          bio: "",
          age: "",
          password: ""
        },
      clicked: false
    }
  }

  handleNewChange = (event, parameter) => {
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


  handleNewClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  handleNewSubmit = (event) => {
    event.preventDefault()
    this.handleNewClick()
    this.props.info.handleAddUser(this.state)
  }

  render(){
    return(
      <form className="new-user-form" onSubmit={this.handleNewSubmit}>
        <h2>Create an Account!</h2>
      <label>
        Name:
      </label>
        <input type="text" name="name" value={this.state.user.name} onChange={(event) => this.handleNewChange(event)}/>
      <br/>
      <label>
        Age:
      </label>
        <input type="text" name="age" value={this.state.user.age} onChange={(event) => this.handleNewChange(event)}/>
      <br/>
      <label>
          Gender:
        <input type="text" name="gender" value={this.state.user.gender} onChange={(event) => this.handleNewChange(event)}/>
      </label>
      <br/>
      <label>
          City:
        <input type="text" name="city" value={this.state.user.city} onChange={(event) => this.handleNewChange(event)}/>
      </label>
      <br/>
      <label>
          State:
        <input type="text" name="state" value={this.state.user.state} onChange={(event) => this.handleNewChange(event)}/>
      </label>
      <br/>
      <label>
          Picture URL:
        <input type="text" name="picture_url" value={this.state.user.picture_url} onChange={(event) => this.handleNewChange(event)}/>
      </label>
      <br/>
      <label>
          Bio:
        <input type="text" name="bio" value={this.state.user.bio} onChange={(event) => this.handleNewChange(event)}/>
      </label>
      <br/>
      <label>
          Password:
        <input type="text" name="password" value={this.state.user.password} onChange={(event) => this.handleNewChange(event)}/>
      </label>
    <input type="submit" value="Save" />
    </form>
    )
  }
}

export default NewUser
