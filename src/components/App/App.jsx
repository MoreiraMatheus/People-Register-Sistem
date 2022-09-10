import { useState, useEffect } from "react";

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
  const [users, setUsers] = useState([])
  // let users = []
  
  useEffect(() => {
    console.log('-------------------\n')

    const localStorageQuery = localStorage.getItem('pessoas')
    console.log('pegando dados\n', localStorageQuery)

    const localStorageQueryJson = JSON.parse(localStorageQuery)
    console.log('passando pra Json\n', localStorageQueryJson)

    setUsers(localStorageQueryJson)
    // users = localStorageQueryJson
    console.log('Salvando na variável: \n', users)
  },[])

  return(
    <>
      <GlobalStyle/>
      <main>
        <PeopleCard People={testPeople}/>
        <ListUsers>
          {/* {users.map(user => {
            return (<PeopleSummary People={user}/>)
          })} */}
          {console.log('Executando:\n',users)}
        </ListUsers>
      </main>
    </>
  );
}

export default App;