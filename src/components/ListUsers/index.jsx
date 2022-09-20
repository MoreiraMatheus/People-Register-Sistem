import { Wrapper } from "./style"
import { PeopleSummary } from '../PeopleSummary'

export const ListUsers = ({Users}) => {
  return(
    <Wrapper>
      {Users.map(user => {
        return (<PeopleSummary key={user.id} id={user.id} People={user}/>)
      })}
    </Wrapper>
  )
}