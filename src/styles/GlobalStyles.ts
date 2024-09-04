import {createGlobalStyle} from 'styled-components'
import {theme} from './Theme'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        font-weight: 400;
        line-height: 180%;
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 20px;
        min-width: 375px;


        a {
            text-decoration: none;
            color: ${theme.colors.font};
        }

        ul {
            list-style: none;
        }

        button {
            background-color: unset;
            border: unset;
        }`