import { useState, useEffect, createContext } from "react"
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { ListUsers } from "../ListUsers";

import { localStorageQuery } from "../../functions/localStorageQuery";

export const Contexto = createContext() 
function App(){

  const [users, setUsers] = useState([])

  const [currentUser, setCurrentlUser] = useState({})

  useEffect(() => {
    const localstorageData = localStorageQuery('pessoas')

    setUsers(localstorageData)
  },[])
  
  const changeUser = function(userID=1){
    setCurrentlUser(users[userID-1])
  }

  useEffect(changeUser, [users])

  //trocar de usuário toda vez que selecionarem outro user

  return(
    <>
      <GlobalStyle/>
      <Contexto.Provider value={changeUser}>
        <main>
          <PeopleCard People={currentUser}/>
          <ListUsers Users={users}/>
        </main>
      </Contexto.Provider>
    </>
  );
}

export default App;