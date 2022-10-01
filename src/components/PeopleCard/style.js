import styled from "styled-components";

export const Wrapper = styled.div`
    width: 65vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 425px) {
        width: 80vw;
    }
`