import React from 'react'
import User from './User'
import EditUser from './EditUser'


class ShowUser extends React.Component {
  state ={
    clicked: false,
    showClass: true
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

  render(){
    console.log(this.props)
    return (
      <div className="main">
        <button className="exit-button">❤️ </button>
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
