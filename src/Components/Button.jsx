import React, { useState } from 'react'

const Button = ({name, bgColor, color, fontSize}) => {
// const [name, setName] = useState();

  // const Button = ({bgcolor, buttonText, fontSize}) => {
  return (
    // <button style={{background: bgcolor, fontSize: fontSize}}>{buttonText}</button>
    


    <button style={{background: bgColor, color, fontSize}}>{name}</button>
  )
}

export default Button
