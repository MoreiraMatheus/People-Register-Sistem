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

const Maria = {
  nome: 'Maria',
  prof: 'Estudante',
  hobbie: 'Jogar Vôlei',
  idade: 22,
  genero: 'F',
  altura: 1.62,
  id: 2
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
          alert('vamos adicionar um user')
          // localStorageAdd('pessoas', Maria)
          setUsers(localStorageQuery('pessoas'))
        }}
      >
        Cadastrar usuário
      </BtCreateNewUser>
    </Wrapper>
  )
}
