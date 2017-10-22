import React from 'react'


class NewUser extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {
          first: "",
          last: "",
          gender: "",
          city: "",
          state: "",
          picture_url: ""
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
    this.props.changeStateOnNewSubmit(this.state)
  }

  render(){
    console.log(this.state)
    return(
      <form className="new-user-form" onSubmit={this.handleNewSubmit}>
        <h2>Create an Account!</h2>
      <label>
        First Name:
      </label>
        <input type="text" name="first" value={this.state.user.first} onChange={(event) => this.handleNewChange(event)}/>
      <br/>
      <label>
        Last Name:
        <input type="text" name="last" value={this.state.user.last} onChange={(event) => this.handleNewChange(event)}/>
      </label>
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
    <input type="submit" value="Save" />
    </form>
    )
  }
}

export default NewUser
