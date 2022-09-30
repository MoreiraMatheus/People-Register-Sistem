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

    @media (max-width: 600px) {
        width: 25vh;
        height: 25vh;
    }
    @media (max-width: 450px) {
        width: 20vh;
        height: 20vh;
    }
    
    img{
        width: inherit;
        height: inherit;
        border-radius: 50%;
        border: 3px solid black;
    }
`