import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { Modal } from "../Modal";
import { BtCreateNewUser } from "../BtCreateNewUser";
import { NoRegisteredUsers } from "../NoRegisteredUsers";

import { createContext, useState } from "react";

import { userImageSelector } from "../../functions/userImageSelector";

export const ModalContext = createContext()

export const PeopleCard = ({People: user}) => {
  const [openModal, setOpenModal] = useState(false)

  return(
    <Wrapper>
      {user == null? 
      <NoRegisteredUsers/> : 
      <>
        <ImageContainer>
          <img src={userImageSelector(user.gender, user.age)} alt="" />
        </ImageContainer>
        <PeopleInformation People={user}/>
      </>
      }
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
