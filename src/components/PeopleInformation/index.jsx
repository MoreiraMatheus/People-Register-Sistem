import { Wrapper } from "./style"

export const PeopleInformation = ({People}) => {
    return(
        <Wrapper>
            <div>
                <p><span>Nome:</span> {People.name}</p>
                <p><span>Profissão:</span> {People.prof}</p>
                <p><span>Hobbie:</span> {People.hobbie}</p>
            </div>
            <div>
                <p><span>idade:</span> {People.age}</p>
                <p><span>Gênero:</span> {People.gender}</p>
                <p><span>Altura:</span> {People.height}</p>
            </div>
        </Wrapper>
    )
}