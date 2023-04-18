import styled from 'styled-components';
import { GlobalStyles, device } from './globalStyles';
import {
  NavBar,
  Part1,
  Part2,
  Part3,
  Part4,
  Part5,
  Part6,
  Part7,
  Part8,
  Part9,
  Footer,
  Container,
} from './components';

const StyledDiv = styled.div`
  position: relative;

  .page {
    padding-top: 88px;
  }

  @media screen and (${device.sm}) {
    .page {
      padding-top: 120px;
    }
  }

  @media screen and (${device.md}) {
  }

  @media screen and (${device.lg}) {
    .page {
      padding-top: 126px;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledDiv>
        <NavBar />
        <Container className="page">
          <Part1 />
          <Part2 />
          <Part3 />
          <Part4 />
          <Part5 />
          <Part6 />
          <Part7 />
          <Part8 />
          <Part9 />
        </Container>
        <Footer />
      </StyledDiv>
    </>
  );
}

export default App;
