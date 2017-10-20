import React from 'react'
import User from './User'
import EditUser from './EditUser'

class ShowUser extends React.Component {
  state ={
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    console.log(this.props)
    return (
      <div className="main">
        {(this.props.selectedUser === "" || this.props.selectedUser === null)
          ? null
          : <div>
            <User user={this.props.selectedUser}/>
          <button className="edit-user-button" onClick={this.handleClick}>Edit</button>
        {(this.state.clicked)
          ? <div className="edit-div">
            <EditUser selectedUser={this.props.selectedUser} clicked={this.state.clicked} handleClick={this.handleClick} handleChange={this.props.handleChange} changeStateOnSubmit={this.props.changeStateOnSubmit}/>
            </div>
          : null
        }
          </div>
        }
      </div>
    )
  }
}

export default ShowUser
