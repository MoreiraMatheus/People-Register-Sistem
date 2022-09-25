import { useContext } from "react"
import { Wrapper, UserDataWrapper, CloseButton } from "./styles"
import { BtCreateNewUser } from "../BtCreateNewUser"
import { XCircle } from 'phosphor-react'
import { ModalInput } from '../ModalInput'

import { localStorageAdd } from "../../functions/localStorageAdd"
import { localStorageQuery } from "../../functions/localStorageQuery"

import { ModalContext } from "../PeopleCard"
import { Contexto } from "../App/App"

export const Modal = () => {
  const {setOpenModal, baseUser} = useContext(ModalContext)

  const {setUsers} = useContext(Contexto)

  const modalData = {}

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
              dataSetFunction = {e => modalData.age = e.target.value}
            />
            <ModalInput 
              labelText={'Gênero'}
              dataSetFunction = {e => modalData.gender = e.target.value}
            />
            <ModalInput 
              labelText={'Altura'}
              dataSetFunction = {e => modalData.height = e.target.value}
            />
          </div>
        </UserDataWrapper>

        <BtCreateNewUser 
          onClick={() => {
            // localStorageAdd('pessoas', baseUser)
            // const currentLocalStorage = localStorageQuery('pessoas')
            // setUsers(currentLocalStorage)
            console.log(modalData)
          }}
        >
          Cadastrar usuário
        </BtCreateNewUser>
      </div>
    </Wrapper>
  )
}