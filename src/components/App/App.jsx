import { ListUsers } from "../ListUser";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";
import { PeopleCard } from "../PeopleCard";
import { PeopleSummary } from "../PeopleSummary";
import { ImageContainer } from "../ImageContainer";
import { PeopleInformation } from "../PeopleInformation";

function App(){
  return(
    <>
      <GlobalStyle/>
      <main>
        <PeopleCard>
          <ImageContainer>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png" alt="" />
          </ImageContainer>
          <PeopleInformation></PeopleInformation>
        </PeopleCard>
        <ListUsers>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
          <PeopleSummary/>
        </ListUsers>
      </main>
    </>
  );
}

export default App;