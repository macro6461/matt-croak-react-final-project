import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
  return(
    <div>
    {props.users.map((user, index)=>{
      return <UserListItem handleClick={props.handleClick} key={index} user={user}> {user.first} {user.last}</UserListItem>
      })
    }

    </div>
  )
}

export default UserList
