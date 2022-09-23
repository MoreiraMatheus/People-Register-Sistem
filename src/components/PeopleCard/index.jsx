import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { Modal } from "../Modal";
import { BtCreateNewUser } from "../BtCreateNewUser";

import { useContext, createContext, useState } from "react";
import { Contexto } from "../App/App";

import { userImageSelector } from "../../functions/userImageSelector";
import { localStorageAdd } from "../../functions/localStorageAdd";
import { localStorageQuery } from "../../functions/localStorageQuery";

const baseUser = {
  nome: '???',
  prof: '???',
  hobbie: '???',
  idade: '???',
  genero: '???',
  altura: '???',
  id: 99999
}

export const ModalContext = createContext()

export const PeopleCard = ({People}) => {
  const [openModal, setOpenModal] = useState(false)

  const {setUsers} = useContext(Contexto)

  const user = People ?? baseUser

  return(
    <Wrapper>
      <ImageContainer>
        <img src={userImageSelector(user.genero, user.idade)} alt="" />
      </ImageContainer>
      <PeopleInformation People={user}/>
      <BtCreateNewUser 
        onClick={() => {
          setOpenModal(!openModal)
          // localStorageAdd('pessoas', baseUser)
          // const currentLocalStorage = localStorageQuery('pessoas')
          // setUsers(currentLocalStorage)
        }}
      >
        Cadastrar usuário
      </BtCreateNewUser>
      <ModalContext.Provider value={{setOpenModal}}>
        {openModal ? <Modal/> : null}
      </ModalContext.Provider>
    </Wrapper>
  )
}
