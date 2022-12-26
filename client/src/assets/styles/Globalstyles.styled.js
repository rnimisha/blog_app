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

`

export default GlobalStyles
