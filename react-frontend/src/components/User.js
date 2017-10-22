import React from 'react'

const User = (props) => {
  const selectUser = () => {
    props.handleClick(props.user.name.first)
  }
  //if we tried to pass in arguments to handleClick while it's in the //onClick prop (onClick={props.handleClick(props.user.name.first)})
  //then it will automatically be invoked. We need it to be passed in
  //as a reference. NOT as a function. So we store it in a const function that we can pass in as a reference
  return (
      <div className="user-card" onClick={selectUser}>
        <br/>
      <img src={props.user.picture_url ? props.user.picture_url : "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20006.jpg" } alt="user_profile_pic"/>
      <h2>{props.user.first} {props.user.last}</h2>
        <h3>{props.user.gender}</h3>
        <h4>{props.user.city}, {props.user.state}</h4>
      <br/>
      </div>
  )
}

export default User
