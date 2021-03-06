import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
  return(
    <div>
    {props.users.map((user, index)=>{
      return <UserListItem handleClick={props.handleClick} key={index} user={user}> {user.name.title}. {user.name.first} {user.name.last}</UserListItem>
      })
    }

    </div>
  )
}

export default UserList
