import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { CreateNewUser } from "../CreateNewUser";
import { userImageSelector } from "../../functions/userImageSelector";

export const PeopleCard = ({People}) => {
  return(
    <Wrapper>
      <ImageContainer>
        <img src={userImageSelector(People.genero, People.idade)} alt="" />
      </ImageContainer>
      <PeopleInformation People={People}/>
      <CreateNewUser>Cadastrar usuário</CreateNewUser>
    </Wrapper>
  )
}
