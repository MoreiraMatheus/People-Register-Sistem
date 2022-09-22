import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";

import { useContext } from "react"
import { Contexto } from "../App/App";

import { Trash } from 'phosphor-react'

import { deleteUserByID } from '../../functions/deleteUserByID'
import { localStorageQuery } from "../../functions/localStorageQuery";
import { updateUserId } from "../../functions/updateUserId";

export const PeopleSummary = ({id, People}) => {
  const {changeCurrentUser, setUsers} = useContext(Contexto)
  const {
    genero,
    idade,
    nome
  } = People ?? {genero: 'M', idade: '???', nome: '???'}

  return(
    <Wrapper>
      <div 
        onClick={() => {changeCurrentUser(id)}}
      >
        <img
          src={userImageSelector(genero, idade)}
          alt="foto-user"
        />
        <p><span>Nome:</span> {nome}</p>
        <p><span>Idade:</span> {idade}</p>
      </div>
      <abbr title="Excluir">
        <Trash 
          onClick={() => {
            deleteUserByID(id)
            const currentLocalStorage = localStorageQuery('pessoas')
            setUsers(updateUserId(currentLocalStorage))
          }}
          size={24}
          color={'#ccc'}
        />
      </abbr>
    </Wrapper>
  )
}