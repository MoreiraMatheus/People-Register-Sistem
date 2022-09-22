import { useState, useEffect, createContext } from "react"
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { ListUsers } from "../ListUsers";

import { localStorageQuery } from "../../functions/localStorageQuery";
import { updateUserId } from "../../functions/updateUserId";

export const Contexto = createContext()

function App(){

  const [users, setUsers] = useState([])

  const [currentUser, setCurrentlUser] = useState({})

  useEffect(() => {
    const localstorageData = localStorageQuery('pessoas')

    setUsers(updateUserId(localstorageData))
  },[])
  
  useEffect(changeCurrentUser, [users])
  
  function changeCurrentUser (userID=1){
    setCurrentlUser(users[userID-1])
  }

  return(
    <>
      <GlobalStyle/>
        <main>
        <Contexto.Provider value={{changeCurrentUser, setUsers}}>
          <PeopleCard People={currentUser}/>
          <ListUsers Users={users}/>
        </Contexto.Provider>
        </main>
    </>
  );
}

export default App;