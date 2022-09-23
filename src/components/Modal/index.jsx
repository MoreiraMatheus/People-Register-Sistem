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
            <ModalInput labelText={'Nome'}/>
            <ModalInput labelText={'Profissão'}/>
            <ModalInput labelText={'Hobbie'}/>
          </div>
          <div>
            <ModalInput labelText={'Idade'}/>
            <ModalInput labelText={'Gênero'}/>
            <ModalInput labelText={'Altura'}/>
          </div>
        </UserDataWrapper>

        <BtCreateNewUser 
          onClick={() => {
            localStorageAdd('pessoas', baseUser)
            const currentLocalStorage = localStorageQuery('pessoas')
            setUsers(currentLocalStorage)
          }}
        >
          Cadastrar usuário
        </BtCreateNewUser>
      </div>
    </Wrapper>
  )
}