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
      <img src={props.user.picture.large} alt="user_profile_pic"/>
      <h2>{props.user.name.title}. {props.user.name.first} {props.user.name.last}</h2>
        <h3>{props.user.gender}</h3>
        <h4>{props.user.location.street}</h4>
        <h4>{props.user.location.city}, {props.user.location.state}</h4>
        <h4>{props.user.location.postcode}</h4>
      <br/>
      </div>
  )
}

export default User
