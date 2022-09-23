import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ccc;
    width: 70vw;
    height: 70vh;
    border-radius: 8px;

    button{
      background-color: #ccc;
      border: none;
      border-radius: inherit;
      align-self: flex-end;
      cursor: pointer;
      margin: 8px;
    }
  }
`