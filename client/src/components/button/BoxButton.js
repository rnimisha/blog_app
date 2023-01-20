import React from 'react'

// styles
import { Button } from './Button.styled'

const BoxButton = ({ width, text, ...props }) => {
  return (
    <Button width ={width} {...props}>
        <span>{text}</span>
    </Button>
  )
}

export default BoxButton
