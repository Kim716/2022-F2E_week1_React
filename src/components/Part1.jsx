import styled from 'styled-components';
import { device } from '../globalStyles';

import BackgroundLg from '../assets/background1.png';
import BackgroundMd from '../assets/background1_md.png';
import Genie from '../assets/genie.png';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .background1_md,
  .background1_lg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .background1_lg {
    display: none;
  }

  h1 {
    position: absolute;
    top: 68%;
    left: 26%;

    color: var(--purple-3);
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.135em;
  }

  .genie {
    position: absolute;
    top: 30%;

    width: 30%;
  }

  @media screen and (${device.sm}) {
    h1 {
      top: 68.5%;
      left: 32%;

      font-size: 1.25rem;
    }
  }

  @media screen and (${device.md}) {
    h1 {
      top: 68%;
      left: 29%;

      font-size: 1.875rem;
    }
  }

  @media screen and (${device.lg}) {
    .background1_md {
      display: none;
    }

    .background1_lg {
      display: block;
    }

    h1 {
      top: 62%;
      left: 36%;

      font-size: 3rem;
    }

    .genie {
      top: 15%;
    }
  }
`;

function Part1() {
  return (
    <StyledDiv>
      <img src={BackgroundMd} alt="background" className="background1_md" />
      <img src={BackgroundLg} alt="background" className="background1_lg" />
      <h1>The F2E 4th 互動式網頁設計</h1>
      <img src={Genie} alt="genie" className="genie" />
    </StyledDiv>
  );
}

export default Part1;
