import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { Modal } from "../Modal";
import { BtCreateNewUser } from "../BtCreateNewUser";

import { createContext, useState } from "react";

import { userImageSelector } from "../../functions/userImageSelector";

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
        }}
      >
        Cadastrar usuário
      </BtCreateNewUser>
      <ModalContext.Provider value={{setOpenModal, baseUser}}>
        {openModal ? <Modal/> : null}
      </ModalContext.Provider>
    </Wrapper>
  )
}
