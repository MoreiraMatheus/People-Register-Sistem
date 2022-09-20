import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";
import { useContext } from "react"
import { Contexto } from "../App/App";

export const PeopleSummary = ({id, People}) => {
  const {changeUser} = useContext(Contexto)
  const {
    genero,
    idade,
    nome
  } = People ?? {genero: 'M', idade: '???', nome: '???'}
  return(
    <Wrapper onClick={() => {changeUser(id)}}>
      <img src={userImageSelector(genero, idade)} alt="foto-user" />
      <p><span>Nome:</span> {nome}</p>
      <p><span>Idade:</span> {idade}</p>
    </Wrapper>
  )
}