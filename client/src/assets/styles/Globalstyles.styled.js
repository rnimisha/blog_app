import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #212427;
    background-color: #fff;
  }

`
export default GlobalStyles
