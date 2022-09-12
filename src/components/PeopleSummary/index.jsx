import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";

export const PeopleSummary = ({id, People}) => {
  const {genero, idade, nome} = People ?? {genero: 'M', idade: '???', nome: '???'}
  return(
    <Wrapper onClick={() => {window.alert('ID do usuário: ' + id)}}>
      <img src={userImageSelector(genero, idade)} alt="foto-user" />
      <p><span>Nome:</span> {nome}</p>
      <p><span>Idade:</span> {idade}</p>
    </Wrapper>
  )
}