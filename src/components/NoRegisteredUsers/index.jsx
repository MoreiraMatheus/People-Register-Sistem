import { Wrapper } from "./styles"
import { Coffee } from 'phosphor-react'

export const NoRegisteredUsers = () => {
  return(
    <Wrapper>
      <h1>Nada por aqui</h1>
      <p>Cadastre um usuário, ou tome um café</p>
      <Coffee 
        size={28}
        weight='bold'
      />
      
    </Wrapper>
  )
}