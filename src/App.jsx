import styled from 'styled-components';
import Container from './components/Container';
import NavBar from './components/NavBar';
import { GlobalStyles, device } from './globalStyles';
import Part1 from './components/Part1';

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
        </Container>
      </StyledDiv>
    </>
  );
}

export default App;
