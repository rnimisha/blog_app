import { createGlobalStyle } from 'styled-components'

import * as palette from '../../constants/palette'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: ${palette.BLACK_TEXT};
     /* background-color: #f7f7f7; */
  }

  a{
    text-decoration: none;
  }

  .ql-container {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    background: #fefcfc;
    height: 300px;
    border-color: #BAD2C1;
  }

  .ql-snow.ql-toolbar {
    display: block;
    background: #BAD2C1;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }

`

export default GlobalStyles
