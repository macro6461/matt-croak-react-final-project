import React from 'react'
import User from './User'
import EditUser from './EditUser'


class ShowUser extends React.Component {
  state ={
    clicked: false,
    showClass: true,
    matches: "",
    mutualMatch: ""
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  mainClick = () => {
    this.setState({
      showClass: !this.state.showClass
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/matches')
    .then(response => response.json())
    .then(json => this.loadMatches(json))
  }

  loadMatches = (json) => {
    this.setState ({
      clicked: false,
      showClass: true,
      matches: json
    })
  }

  createMatch = () => {
    if (this.props.currentUser === this.props.selectedUser || this.props.selectedUser === "" ) {
      console.log("don't match")
    } else {
      fetch('http://localhost:3000/matches', {
        headers: {"Content-Type": "application/json",
        "Accept":"application/json"},
        method: "POST",
        body: JSON.stringify({
          matcher_id: this.props.currentUser.id,
          matchee_id: this.props.selectedUser.id,
        })
      })
      .then(res => res.json())
      .then(json => this.checkMatches(json))
    }
  }

  checkMatches = (json) => {
    debugger
    let matcher = this.props.users.find((user) => {
      debugger
      return parseInt(user.id) === parseInt(json.matcher_id)
    })
    let matchee = this.props.users.find((user) => {
      debugger
      return parseInt(user.id) === parseInt(json.matchee_id)
    })
    let finalMatch = this.state.matches.find((match) => {
      return parseInt(match.matcher_id) === matchee.id && parseInt(match.matchee_id) === matcher.id
    })
    if (finalMatch){
      this.setState({
        mutualMatch: finalMatch
      })
    } else {
      console.log("invalid bitch")
    }
  }

  render(){
    return (
      <div className="main">
        {this.state.mutualMatch === "" || this.state.mutualMatch === null
        ? null
        :<h1 className="matched">You matched with {this.props.selectedUser.name}</h1>
        }
        <button className="exit-button" onClick={this.createMatch}>❤️</button>
        {(this.props.selectedUser === "" || this.props.selectedUser === null)
          ? <User user={this.props.currentUser} handleClick={this.handleClick}/>
          : <div>
            <User user={this.props.selectedUser} handleClick={this.handleClick}/>
            </div>
        }
      </div>
    )
  }
}

export default ShowUser
