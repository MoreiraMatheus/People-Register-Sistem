import { useContext } from "react"
import { Wrapper, UserDataWrapper, CloseButton } from "./styles"
import { BtCreateNewUser } from "../BtCreateNewUser"
import { XCircle } from 'phosphor-react'
import { ModalInput } from '../ModalInput'

import { localStorageAdd } from "../../functions/localStorageAdd"
import { localStorageQuery } from "../../functions/localStorageQuery"
import { validateUserRequiredFields } from "../../functions/validateUserRequiredFields"

import { ModalContext } from "../PeopleCard"
import { Contexto } from "../App/App"

export const Modal = () => {
  const {setOpenModal} = useContext(ModalContext)

  const {setUsers} = useContext(Contexto)

  const modalData = {gender: 'M'}

  return(
    <Wrapper>
      <div>
        <CloseButton onClick={() => {setOpenModal()}}>
          <XCircle 
            weight="bold"
            size={32}
          />
        </CloseButton>

        <UserDataWrapper>
          <div>
            <ModalInput 
              labelText={'Nome'} 
              dataSetFunction={e => modalData.name = e.target.value}
            />
            <ModalInput 
              labelText={'Profissão'}
              dataSetFunction = {e => modalData.prof = e.target.value}
            />
            <ModalInput 
              labelText={'Hobbie'}
              dataSetFunction = {e => modalData.hobbie = e.target.value}
            />
          </div>
          <div>
            <ModalInput 
              labelText={'Idade'}
              inputType='number'
              dataSetFunction = {e => modalData.age = e.target.value}
            />
            <ModalInput 
              labelText={'Gênero'}
              selectType
              selectOptions={['Masculino', 'Feminino']}
              dataSetFunction = {e => modalData.gender = e.target.value}
            />
            <ModalInput 
              labelText={'Altura'}
              inputType='number'
              dataSetFunction = {e => modalData.height = e.target.value}
            />
          </div>
        </UserDataWrapper>

        <BtCreateNewUser
          onClick={() => {
            if(validateUserRequiredFields(modalData)){
              localStorageAdd('pessoas', modalData)
              const currentLocalStorage = localStorageQuery('pessoas')
              setUsers(currentLocalStorage)
              setOpenModal()
            }
            else{
              alert('campos obrigatórios não preenchidos')
            }
          }}
        />
      </div>
    </Wrapper>
  )
}