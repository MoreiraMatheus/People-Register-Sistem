import { ShowUserButton, Wrapper, EmptyUserlist } from "./style"
import { PeopleSummary } from '../PeopleSummary'

import { useState } from "react"

import { Eye, EyeSlash } from 'phosphor-react'

export const ListUsers = ({Users}) => {

  const [showUsers, setShowUsers] = useState(true)

  const [wrapperConfig, setWrapperConfig] = useState(['80vw', '100vh', 'position: absolute; top:0; right: 0;'])

  return(
    <Wrapper config={wrapperConfig}>
      <ShowUserButton>
        <button>
          {showUsers ?
            <Eye
              size={24}
              weight='bold'
              onClick={()=>{
                setShowUsers(!showUsers)
                setWrapperConfig(['auto', 'auto', 'position: absolute; top:0; right: 0;'])
              }}
              cursor='pointer'
              />:
              <EyeSlash
              size={24}
              weight='bold'
              onClick={()=>{
                setShowUsers(!showUsers)
                setWrapperConfig(['80vw', '100vh', 'position: absolute; top:0; right: 0;'])
              }}
              cursor='pointer'
            />
          }
        </button>
      </ShowUserButton>
      {showUsers?
        Users.length === 0 ?
        <EmptyUserlist>Usuários cadastrados aparecerão aqui</EmptyUserlist> :
        Users.map(user => {
          return (
          <PeopleSummary
            key={user.id}
            id={user.id}
            People={user}
          />)
        }):null}
    </Wrapper>
  )
}