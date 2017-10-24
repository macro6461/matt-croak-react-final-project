import React from 'react'

const User = (props) => {
  const selectUser = () => {
    props.handleClick(props.user.name)
  }
  //if we tried to pass in arguments to handleClick while it's in the //onClick prop (onClick={props.handleClick(props.user.name.first)})
  //then it will automatically be invoked. We need it to be passed in
  //as a reference. NOT as a function. So we store it in a const function that we can pass in as a reference
  console.log(props)
  return (
      <div className="user-card" onClick={selectUser}>
        <br/>
      <img src={props.user.picture_url ? props.user.picture_url : "http://i0.kym-cdn.com/photos/images/original/001/054/924/d3d.png" } alt="user_profile_pic"/>
      <h2>{props.user.name}, {props.user.age}</h2>
        <h3>{props.user.gender}</h3>
        <h4>{props.user.city}, {props.user.state}</h4>
        <h4>{props.user.bio}</h4>
      <br/>
      </div>
  )
}

export default User
