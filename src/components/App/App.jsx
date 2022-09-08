import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { ListUsers } from "../ListUsers";
import { PeopleSummary } from "../PeopleSummary";

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
        <PeopleCard People={testPeople}/>
        <ListUsers>
          <PeopleSummary People={testPeople}/>
        </ListUsers>
      </main>
    </>
  );
}

export default App;