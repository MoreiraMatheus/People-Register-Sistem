import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { BtCreateNewUser } from "../BtCreateNewUser";
import { userImageSelector } from "../../functions/userImageSelector";

export const PeopleCard = ({People}) => {
  return(
    <Wrapper>
      <ImageContainer>
        <img src={userImageSelector(People.genero, People.idade)} alt="" />
      </ImageContainer>
      <PeopleInformation People={People}/>
      <BtCreateNewUser>Cadastrar usuário</BtCreateNewUser>
    </Wrapper>
  )
}
