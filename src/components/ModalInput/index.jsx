import { Wrapper, Input, Label } from './styles'

export const ModalInput = ({labelText, inputType, dataSetFunction}) => {

  return(
    <Wrapper>
      <Label>{labelText}</Label>
      <Input 
        type={inputType}
        onChange={
          dataSetFunction
      }/>
    </Wrapper>
  )
}