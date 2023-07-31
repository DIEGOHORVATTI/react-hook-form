import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: inherit;
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%;
    width: 100%;
    background: #161c24;
    color: #fff;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: transparent;
    border-radius: 15px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-thumb {
    margin: 1px 5px;
    background: grey;
    border-radius: 15px;
  }

`
