import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const User = (props) => {
  const selectUser = () => {
    props.handleClick(props.user.name)
  }
  //if we tried to pass in arguments to handleClick while it's in the //onClick prop (onClick={props.handleClick(props.user.name.first)})
  //then it will automatically be invoked. We need it to be passed in
  //as a reference. NOT as a function. So we store it in a const function that we can pass in as a reference
  return (
    // <Card
    // image={props.user.picture_url ? props.user.picture_url : "http://i0.kym-cdn.com/photos/images/original/001/054/924/d3d.png" }
    // header={props.user.name}
    // age={props.user.age}
    // description={props.user.bio}
    // city={props.user.city}
    // state={props.user.state}
    // extra={props.user.gender}
    // />
    <Card>
    <Image id="cardImg" src={props.user.picture_url ? props.user.picture_url : "http://i0.kym-cdn.com/photos/images/original/001/054/924/d3d.png" }/>
    <Card.Content>
      <Card.Header>
        {props.user.name}, {props.user.age}
      </Card.Header>
      <Card.Description>
        {props.user.gender}<br></br>
        {props.user.bio}<br></br>
        {props.user.city}<br></br>
        {props.user.state}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default User
