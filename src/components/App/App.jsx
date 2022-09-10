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
  
  useEffect(() => {
    const localStorageQuery = localStorage.getItem('pessoas')

    const localStorageQueryJson = JSON.parse(localStorageQuery)

    setUsers(localStorageQueryJson)
  },[])

  return(
    <>
      <GlobalStyle/>
      <main>
        <PeopleCard People={testPeople}/>
        <ListUsers>
          {users.map(user => {
            return (<PeopleSummary key={users.indexOf(user)}People={user}/>)
          })}
        </ListUsers>
      </main>
    </>
  );
}

export default App;