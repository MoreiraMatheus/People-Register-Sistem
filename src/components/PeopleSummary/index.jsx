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
    gender,
    age,
    name
  } = People ?? {gender: 'M', age: '???', name: '???'}

  return(
    <Wrapper>
      <div 
        onClick={() => {changeCurrentUser(id)}}
      >
        <img
          src={userImageSelector(gender, age)}
          alt="foto-user"
        />
        <p><span>Nome:</span> {name}</p>
        <p><span>Idade:</span> {age}</p>
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