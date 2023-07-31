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
  .mirror-icon {
  transform: scaleX(-1);
  }
  [title = mapMarkerImage] img{
    border-radius: 50%!important;
  }
 
  .clusterclasse div{
    color: #fff !important;
    font-size: 15px !important;
  }
  .RouteMarkers{
    padding: 3px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 2px 3px 2px #0009;
    transform: translate(0px,0px,100px) ;
  }
  @keyframes blink {
  0% {
    opacity: .2;
    filter: brightness(50%);
  }
  50% {
    opacity: 1;

    filter: brightness(100%);
  }
  100% {
    opacity: .2;
    filter: brightness(50%);
  }
}
.blinking {
    animation: blink 2s infinite;
  }
`
