import styled from "styled-components";

export const ImageContainer = styled.div`
    background-color: blue;
    width: 30vh;
    height: 30vh;
    padding: 2px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        width: inherit;
        height: inherit;
        border-radius: 50%;
        border: 3px solid black;
    }
`