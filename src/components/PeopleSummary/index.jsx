import { Wrapper } from "./style";
import { userImageSelector } from "../../functions/userImageSelector";

export const PeopleSummary = ({People}) => {
  return(
    <Wrapper>
      <img src={userImageSelector(People.genero, People.idade)} alt="foto-user" />
      <p><span>Nome:</span> {People.nome}</p>
      <p><span>Idade:</span> {People.idade}</p>
    </Wrapper>
  )
}