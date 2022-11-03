import styled from 'styled-components'

export const ShowUserButton = styled.div`
    button{
        border: none;
        background-color: inherit;
    }
`

export const Wrapper = styled.div`
    width: ${props => props.config[0]};
    height: ${props => props.config[1]};
    padding: 20px 0 20px 20px;
    background-color: rgba(100, 100, 100, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 20px;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    right: 0;

    ::-webkit-scrollbar{
        width: 20px;
    }
`

export const EmptyUserlist = styled.span`
    width: 100%;
    margin-top: 20%;
    text-align: center;
    font-weight: bold;
    color: #333;
`