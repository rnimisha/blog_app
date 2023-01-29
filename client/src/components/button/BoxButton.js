import React from 'react'

// styles
import { Button } from './Button.styled'

const BoxButton = ({ width, text, action, ...props }) => {
  return (
    <Button onClick={action || null} width ={width} {...props}>
        <span>{text}</span>
    </Button>
  )
}

export default BoxButton
