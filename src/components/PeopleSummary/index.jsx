import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";

export const PeopleSummary = ({People}) => {
  const {genero, idade, nome} = People ?? {genero: 'M', idade: '?', nome: '???'}
  return(
    <Wrapper>
      <img src={userImageSelector(genero, idade)} alt="foto-user" />
      <p><span>Nome:</span> {nome}</p>
      <p><span>Idade:</span> {idade}</p>
    </Wrapper>
  )
}