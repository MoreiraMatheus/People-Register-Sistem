import styled from "styled-components";

const templateStyle = `
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: rgb(0, 0, 255);
  color: white;
  width: 80%;
  height: 40px;
  padding: 8px;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.span`
  color: black;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 10%;
`

export const Input = styled.input`${templateStyle}`

export const Select = styled.select`${templateStyle}`

export const Option = styled.option`
  font-weight: bold;
`
