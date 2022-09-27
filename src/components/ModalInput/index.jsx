import { Wrapper, Input, Select, Option, Label } from './styles'

export const ModalInput = ({labelText, inputType, dataSetFunction, selectType, selectOptions}) => {
  return(
    <Wrapper>
      <Label>{labelText}</Label>
      {selectType == true ?
        <Select onChange={dataSetFunction}>
          {selectOptions.map(option => {return(<Option value={option[0]}>{option}</Option>)})}
        </Select>
        :
        <Input 
          type={inputType}
          onChange={dataSetFunction}
        />
      }
    </Wrapper>
  )
}