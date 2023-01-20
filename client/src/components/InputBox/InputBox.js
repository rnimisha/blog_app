import React from 'react'
import { TextBox } from './InputBox.styled'

const InputBox = ({ err, touched, ...props }) => {
  return (
    <>
    <TextBox {...props}/>
        {err && touched
          ? (
            <div>{err} </div>
            )
          : null}
    </>
  )
}

export default InputBox
