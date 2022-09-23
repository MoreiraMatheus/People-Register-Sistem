import { useContext } from "react"
import { ModalContext } from "../PeopleCard"
import { Wrapper } from "./styles"
import { XCircle } from 'phosphor-react'

export const Modal = () => {
  const {setOpenModal} = useContext(ModalContext)

  return(
    <Wrapper>
      <div>
        <button onClick={() => {setOpenModal()}}>
          <XCircle 
            weight="bold"
            size={32}
          />
        </button>
      
      </div>
    </Wrapper>
  )
}