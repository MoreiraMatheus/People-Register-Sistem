import { Wrapper, EmptyUserlist } from "./style"
import { PeopleSummary } from '../PeopleSummary'

export const ListUsers = ({Users}) => {
  return(
    <Wrapper>
      {Users.length === 0 ?
        <EmptyUserlist>Usuários cadastrados aparecerão aqui</EmptyUserlist> :
        Users.map(user => {
          return (
          <PeopleSummary 
            key={user.id} 
            id={user.id} 
            People={user}
          />)
        })
      }
    </Wrapper>
  )
}