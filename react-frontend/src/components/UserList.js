import React from 'react'
import UserListItem from './UserListItem'
import "../App.css"

const UserList = (props) => {

  return(
    <div className="userList">
    {props.users.map((user, index)=>{
      return <UserListItem handleClick={props.handleClick} key={index} user={user}> {user.name}</UserListItem>
      })
    }
    </div>
  )
}

export default UserList
