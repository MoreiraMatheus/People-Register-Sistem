import { useState, useEffect } from "react"
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { ListUsers } from "../ListUsers";

import { localStorageQuery } from "../../functions/localStorageQuery";

function App(){
  const [users, setUsers] = useState([])

  const [currentUser, setCurrentlUser] = useState({})
  
  useEffect(() => {
    const localstorageData = localStorageQuery('pessoas')

    setUsers(localstorageData)

  },[])
  
  useEffect(() => {
    setCurrentlUser(users[0])
  }, [users])

  return(
    <>
      {console.log('renderizou')}
      <GlobalStyle/>
      <main>
        <PeopleCard People={currentUser}/>
        <ListUsers Users={users}/>
      </main>
    </>
  );
}

export default App;