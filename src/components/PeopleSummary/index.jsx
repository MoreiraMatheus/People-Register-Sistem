import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";
import { useContext } from "react"
import { Contexto } from "../App/App";

import { Trash } from 'phosphor-react'

export const PeopleSummary = ({id, People}) => {
  const {changeCurrentUser} = useContext(Contexto)
  const {
    genero,
    idade,
    nome
  } = People ?? {genero: 'M', idade: '???', nome: '???'}

  return(
    <Wrapper onClick={() => {changeCurrentUser(id)}}>
      <img src={userImageSelector(genero, idade)} alt="foto-user" />
      <p><span>Nome:</span> {nome}</p>
      <p><span>Idade:</span> {idade}</p>
      <abbr title="Excluir">
        <Trash
          size={24}
          color={'#ccc'}
        />
      </abbr>
    </Wrapper>
  )
}