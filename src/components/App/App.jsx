import { ListUsers } from "../ListUsers";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { PeopleSummary } from "../PeopleSummary";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";
import { CreateNewUser } from "../CreateNewUser";

const testPeople = {
  nome: 'Matheus',
  prof: 'Estudante',
  hobbie: 'Jogar video Game',
  idade: 19,
  genero: 'M',
  altura: 1.73
}

function App(){
  return(
    <>
      <GlobalStyle/>
      <main>
        <PeopleCard>
          <ImageContainer>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png" alt="" />
          </ImageContainer>
          <PeopleInformation People={testPeople}/>
          <CreateNewUser>Cadastrar usuário</CreateNewUser>
        </PeopleCard>
        <ListUsers>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
        </ListUsers>
      </main>
    </>
  );
}

export default App;