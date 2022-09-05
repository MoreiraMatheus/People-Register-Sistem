import { Wrapper } from "./style"

export const PeopleInformation = ({People}) => {
    return(
        <Wrapper>
            <div>
                <p><span>Nome:</span> {People.nome}</p>
                <p><span>Profissão:</span> {People.prof}</p>
                <p><span>Hobbie:</span> {People.hobbie}</p>
            </div>
            <div>
                <p><span>idade:</span> {People.idade}</p>
                <p><span>Gênero:</span> {People.genero}</p>
                <p><span>Altura:</span> {People.altura}</p>
            </div>
        </Wrapper>
    )
}