import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 15vh;
    width: 85%;
    height: 60%;
    background-color: #d9d9d9;
    box-shadow: 0 6px 12px #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15vh;
    color: #333;

    @media (max-width: 600px) {
        flex-direction: column;
    }
    @media (max-width: 450px) {
        margin-top: 10vh;
    }

    & > div{
        display: inherit;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        height: 70%;
        margin-top: -3%;

        @media (max-width: 600px) {
            margin-top: -5%;
            width: 100%;
            justify-content: center;
        }

        & > p{
            font-weight: 600;
            width: 100%;
    
            @media (max-width: 750px) {
                display: flex;
                flex-direction: column;
                align-items: center;
            }   

            & > span{
                font-weight: 800;
                color: blue;
            }
        }
    }

`