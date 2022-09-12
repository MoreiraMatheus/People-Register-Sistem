import { Wrapper } from "./style";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { BtCreateNewUser } from "../BtCreateNewUser";
import { userImageSelector } from "../../functions/userImageSelector";

const baseUser = {
  nome: '???',
  prof: '???',
  hobbie: '???',
  idade: '???',
  genero: '???',
  altura: '???'
}

export const PeopleCard = ({People}) => {
  const user = People ?? baseUser
  return(
    <Wrapper>
      <ImageContainer>
        <img src={userImageSelector(user.genero, user.idade)} alt="" />
      </ImageContainer>
      <PeopleInformation People={user}/>
      <BtCreateNewUser>Cadastrar usuário</BtCreateNewUser>
    </Wrapper>
  )
}
