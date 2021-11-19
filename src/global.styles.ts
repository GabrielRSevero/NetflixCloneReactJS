import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #fff;
        margin: 0;
    }

    .lists {
        margin-top: -150px;
    }

    footer {
        margin: 50px 0;
        text-align: center;
    }

    .loading {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 99;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle