import React from 'react'

const Form = (props) => {
  return (
    <div>
       <label for={props.label}>{props.text}</label>
       <input type={props.type} placeholder={props.placeholder} required />
    </div>
  )
}

export default Form