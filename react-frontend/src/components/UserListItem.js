import React from 'react'

const UserListItem = (props) => {
  const selectUser = () => {
    props.handleClick(props.user.name)
  }
  //if we tried to pass in arguments to handleClick while it's in the //onClick prop (onClick={props.handleClick(props.user.name.first)})
  //then it will automatically be invoked. We need it to be passed in
  //as a reference. NOT as a function. So we store it in a const function that we can pass in as a reference
  return (
      <div className="list-user-card" onClick={selectUser}>

      <h2 className="user-card-name"> {props.user.name}</h2>
      </div>
  )
}

export default UserListItem
