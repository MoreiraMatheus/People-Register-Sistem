import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 13%;
    width: 100%;
    background-color: blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    :hover{
        background-color: #0000CC;
        transition: 0.5s;
    }

    div{
        width: 80%;
        display: inherit;
        justify-content: space-between;
        align-items: center;
        cursor: default;
        
        img{
            width: 60px;
            height: 60px;
            margin-right: 8px;
            background-color: white;
            border-radius: 50%;

            @media (max-width: 930px) {
                width: 50px;
                height: 50px;
            }
            @media (max-width: 500px) {
                display: none;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        p{
            color: #ccc;
            font-weight: bold;
            
            span{
                color: black;
            }
            
            @media (max-width: 930px) {
                font-size: 0.9em;
            }
            @media (max-width: 700px) {
                display: inherit;
                flex-direction: column;
                align-items: center;
            }
        }

        @media (max-width: 930px) {
            padding: 8px 0;
            flex-direction: column;
        }
        
    }

    abbr{
        cursor: pointer;
    }

    @media (max-width: 930px) {
        flex-direction: column;
    }
`