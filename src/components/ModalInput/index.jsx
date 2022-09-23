import { Wrapper, Input, Label } from './styles'

export const ModalInput = ({labelText, inputType}) => {
  return(
    <Wrapper>
      <Label>{labelText}</Label>
      <Input type={inputType}/>
    </Wrapper>
  )
}