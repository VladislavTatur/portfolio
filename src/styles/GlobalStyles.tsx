import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 180%;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
    }
    
    body {
        background-color: #222A36;
        color: #ffffff;
        font-weight: 400;

    }
`