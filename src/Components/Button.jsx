import React from 'react'

const Button = ({bgcolor, buttonText, fontSize}) => {
  return (
    <button style={{background: bgcolor, fontSize: fontSize}}>{buttonText}</button>
  )
}

export default Button
