import React from 'react'

const MyProps = (props) => {
  return (
    <div style={{backgroundColor:'yellow', margin:20}}>
      <h1>Hello student {props.name} {props.gmail}</h1>
      <h1>Email: {props.email}</h1>
    </div>
  )
}

export default MyProps
