import React from 'react'
import { TextBox, Error } from './InputBox.styled'

const InputBox = ({ err, touched, ...props }) => {
  return (
    <div style={{ width: '100%' }}>
    <TextBox {...props}/>
        {err && touched
          ? (
            <Error>{err} </Error>
            )
          : null}
    </div>
  )
}

export default InputBox
