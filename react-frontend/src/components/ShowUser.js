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
    return (
      <div className="main">
        {(this.props.selectedUser === "" || this.props.selectedUser === null)
          ? null
          : <div>
            <User user={this.props.selectedUser}/>
          <button className="edit-user-button" onClick={this.handleClick}>Edit</button>
        <button className="exit-button">Exit</button>
        {(this.state.clicked)
          ? <div className="edit-div">
            <EditUser selectedUser={this.props.selectedUser} clicked={this.state.clicked} handleClick={this.handleClick} handleChange={this.props.handleChange} handleEdit={this.props.changeEdit}/>
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
