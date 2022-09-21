import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 13%;
    width: 100%;
    background-color: blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    
    :hover{
        background-color: #0000CC;
        transition: 0.5s;
    }

    & > img{
        width: 60px;
        height: 60px;
        background-color: white;
        border-radius: 50%;
    }

    p{
        color: #ccc;
        font-weight: bold;

        span{
            color: black;
        }
    }
`