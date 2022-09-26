import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { Modal } from "../Modal";
import { BtCreateNewUser } from "../BtCreateNewUser";

import { createContext, useState } from "react";

import { userImageSelector } from "../../functions/userImageSelector";

const baseUser = {
  name: '???',
  prof: '???',
  hobbie: '???',
  age: '???',
  gender: '???',
  height: '???',
  id: 99999
}

export const ModalContext = createContext()

export const PeopleCard = ({People}) => {
  const [openModal, setOpenModal] = useState(false)

  const user = People ?? baseUser

  return(
    <Wrapper>
      <ImageContainer>
        <img src={userImageSelector(user.gender, user.age)} alt="" />
      </ImageContainer>
      <PeopleInformation People={user}/>
      <BtCreateNewUser 
        onClick={() => {
          setOpenModal(!openModal)
        }}
      />
      <ModalContext.Provider value={{setOpenModal}}>
        {openModal ? <Modal/> : null}
      </ModalContext.Provider>
    </Wrapper>
  )
}
