import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    main{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`