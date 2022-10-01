import { ShowUserButton, Wrapper, EmptyUserlist } from "./style"
import { PeopleSummary } from '../PeopleSummary'

import { useState } from "react"

import { Eye, EyeSlash } from 'phosphor-react'

export const ListUsers = ({Users}) => {

  const [showUser, setShowUser] = useState(true)

  const [wrapperConfig, setWrapperConfig] = useState('30vw')

  return(
    <Wrapper config={wrapperConfig}>
      <ShowUserButton>
        <button>
          {showUser ?
            <Eye
              size={24}
              weight='bold'
              onClick={()=>{
                setShowUser(!showUser)
                setWrapperConfig('auto')
              }}
              cursor='pointer'
              />:
              <EyeSlash
              size={24}
              weight='bold'
              onClick={()=>{
                setShowUser(!showUser)
                setWrapperConfig('30vw')
              }}
              cursor='pointer'
            />
          }
        </button>
      </ShowUserButton>
      {showUser?
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