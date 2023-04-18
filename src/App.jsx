import styled from 'styled-components';
import Container from './components/Container';
import NavBar from './components/NavBar';
import { GlobalStyles, device } from './globalStyles';

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
        <Container className="page">123</Container>
      </StyledDiv>
    </>
  );
}

export default App;
