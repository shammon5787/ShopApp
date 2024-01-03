import React from 'react'
import Button from './Components/Button'

const MyProps = (props) => {
    return (
        <>
            <div style={{ backgroundColor: 'yellow', margin: 20, display: 'flex', gap: 80 }}>
                <h1>Hello student {props.name} </h1>
                <h1>Email: {props.email}</h1>
            </div>
        </>
    )
}

export default MyProps
