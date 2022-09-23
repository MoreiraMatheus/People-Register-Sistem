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
    padding-bottom: 16px;
  }
`

export const CloseButton = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: inherit;
  align-self: flex-end;
  cursor: pointer;
  margin: 8px;
`

export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 70%;
  
  > div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
  }
`