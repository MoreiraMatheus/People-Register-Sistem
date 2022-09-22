import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { BtCreateNewUser } from "../BtCreateNewUser";
import { userImageSelector } from "../../functions/userImageSelector";

import { useContext } from "react";
import { Contexto } from "../App/App";

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

const Jose = {
  nome: 'José',
  prof: 'Aposentado',
  hobbie: 'Jogar no bicho',
  idade: 78,
  genero: 'M',
  altura: 1.77,
  id: 3
}

export const PeopleCard = ({People}) => {

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
          // localStorageAdd('pessoas', Jose)
          setUsers(localStorageQuery('pessoas'))
        }}
      >
        Cadastrar usuário
      </BtCreateNewUser>
    </Wrapper>
  )
}
