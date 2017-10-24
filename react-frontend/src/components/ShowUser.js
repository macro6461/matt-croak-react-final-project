import React from 'react'
import User from './User'
import EditUser from './EditUser'


class ShowUser extends React.Component {
  state ={
    clicked: false,
    showClass: true,
    matches: "",
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
      debugger
      this.props.handleMutualMatch(finalMatch)
    } else {
      console.log("invalid")
    }
  }

  render(){
    console.log(this.props)
    return (
      <div className="main">
        {this.props.mutualMatch === "" || this.props.mutualMatch === null
        ? null
        :<div className="heart">
          <img src="https://images.onlinelabels.com/images/clip-art/nicubunu/nicubunu_Card_symbols_Heart.png"/>
        <h1 className="matched">You matched with </h1>
      <h1 className="matched-name">{this.props.selectedUser.name}!</h1>
        </div>
        }
        <img className="match-button" src="https://images.onlinelabels.com/images/clip-art/nicubunu/nicubunu_Card_symbols_Heart.png" onClick={this.createMatch}/>
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
