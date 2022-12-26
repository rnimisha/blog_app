import React from 'react'

// styles
import { Button } from './Button.styled'

const BoxButton = ({ width, text }) => {
  return (
    <Button width ={width}>
        <span>{text}</span>
    </Button>
  )
}

export default BoxButton
