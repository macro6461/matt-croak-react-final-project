import React, { Component } from 'react';
import UserList from './components/UserList'
import styles from './App.css'
import ShowUser from './components/ShowUser'
import NewUser from './components/NewUser'
import { Link, Route, withRouter} from 'react-router-dom'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import SignInUp from './components/SignInUp.js'





class App extends Component {
  constructor(){
    super()
    this.state = {
      users: [],
      currentUser: 'me',
      selectedUser: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => this.assignUsers(json))
  }

  assignUsers = (json) => {
    this.setState ({
      users: json
    })
  }



  handleUserClick = (element) => {
    debugger
    let selectedUser = this.state.users.find((user) =>{
      return (user.name === element)
    })
    this.setState({
      selectedUser: selectedUser
    })
  }

  handleUserDelete = (deleteData) => {
    debugger
    console.log(deleteData.user)
    let newState = deleteData.user.state
    let newCity = deleteData.user.city
    fetch(`http://localhost:3000/users/${deleteData.user.id}`, {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "DELETE",
      body: JSON.stringify({
        name: deleteData.user.name,
        gender: deleteData.user.gender,
        city: newCity, state: newState, picture_url: deleteData.user.picture_url, bio: deleteData.user.bio, password: deleteData.user.password
      })
    })
    .then(this.setState({
      selectedUser: "",
      users: this.state.users.filter((user) =>{
        return user.name != deleteData.user.name
      })
    }))
    this.props.history.push("/")
  }

  changeStateOnNewEdit = (newEditData) => {
    console.log(this.props)
    debugger
    let newState = newEditData.user.state
    let newCity = newEditData.user.city
    fetch(`http://localhost:3000/users/${newEditData.user.id}`, {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "PATCH",
      body: JSON.stringify({
        name: newEditData.user.name,
        gender: newEditData.user.gender,
        city: newCity, state: newState, picture_url: newEditData.user.picture_url, bio: newEditData.user.bio, password: newEditData.user.password
      })
    })
      .then(res => res.json())
      this.setState((prevState) => {
         return {users: prevState.users.map((user) => {
          if (user === newEditData.selectedUser) {
            return newEditData.user
          } else {
            return user
          }
        }),
        selectedUser: newEditData.user
      }
    })
    this.props.history.push("/")
  }

  deleteUserOnClick = () => {
    debugger
    this.setState({
      selectedUser: ""
    })
  }

  changeStateOnNewSubmit = (newUserData) => {
    debugger
    let newState = newUserData.user.state
    let newCity = newUserData.user.city
    fetch('http://localhost:3000/users', {
      headers: {"Content-Type": "application/json",
      "Accept":"application/json"},
      method: "POST",
      body: JSON.stringify({
        name: newUserData.user.name,
        gender: newUserData.user.gender,
        city: newCity, state: newState, picture_url: newUserData.user.picture_url, bio: newUserData.user.bio, password: newUserData.user.password
      })
    })
      .then(res => res.json())
    this.setState({
        users: [...this.state.users, newUserData.user],
        selectedUser: newUserData.user
    })
    this.props.history.push("/")
  }


    changeStateOnSubmit = (editData) => {
      this.setState((prevState) => {
         return {users: prevState.users.map((user) => {
          if (user === editData.selectedUser) {
            return editData.user
          } else {
            return user
          }
        }),
        currentUser: editData.user
      }
    })
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        {this.state.currentUser === ""
          ? <SignInUp selectedUser={this.state.selectedUser} handleAddUser={this.changeStateOnNewSubmit}/>
          : <div>
              <Nav selectedUser={this.state.selectedUser} users={this.state.users}   handleChange={this.handleChange} changeEdit={this.changeStateOnNewEdit} changeStateOnSubmit={this.changeStateOnSubmit} handleUserClick={this.handleUserClick} handleUserDelete={this.handleUserDelete} handleAddUser={this.changeStateOnNewSubmit}/>
            <h3>Welcome {this.state.currentUser.name}!</h3>
              <Route exact path="/" render={() => <Home selectedUser={this.state.selectedUser} users={this.state.users} handleChange={this.handleChange} handleAddUser={this.changeStateOnNewSubmit} changeEdit={this.changeStateOnNewEdit} changeStateOnSubmit={this.changeStateOnSubmit} handleUserClick={this.handleUserClick}/>}/>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(App);
