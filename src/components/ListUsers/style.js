import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 30vw;
    height: 90vh;
    padding: 20px 0 20px 20px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 20px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        background-color: #d9d9d9;
        width: 20px;
    }
`