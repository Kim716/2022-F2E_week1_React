import styled from 'styled-components';
import { device } from '../globalStyles';

import BackgroundLg from '../assets/background2.png';
import BackgroundMd from '../assets/background2_md.png';
import designerGenie from '../assets/designer.png';
import frontEndGenie from '../assets/fe.png';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;

  .anime-area {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 16px;

    .background2_md,
    .background2_lg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .background2_lg {
      display: none;
    }

    h3,
    .designer,
    .front-end {
      position: absolute;
    }

    h3 {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      height: 50%;
      color: white;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0.15em;
      -webkit-writing-mode: vertical-lr;
      writing-mode: vertical-lr;
    }

    .designer {
      top: 40%;
      left: 10%;
      width: 25%;
    }

    .front-end {
      top: 35%;
      left: 65%;
      width: 25%;
    }
  }

  @media screen and (${device.sm}) {
    padding: 24px;

    .anime-area {
      margin-top: 24px;

      h3 {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (${device.md}) {
    padding: 32px;

    .anime-area {
      margin-top: 32px;

      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (${device.ipad}) {
    padding: 40px;

    .anime-area {
      margin-top: 40px;

      h3 {
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (${device.lg}) {
    padding: 48px 110px;

    .anime-area {
      margin-top: 48px;

      h3 {
        font-size: 3.5rem;
      }
    }
  }
`;

function Part3() {
  return (
    <StyledDiv>
      <h2>設計師與工程師進行攜手合作</h2>
      <div className="anime-area">
        <img src={BackgroundMd} alt="background" className="background2_md" />
        <img src={BackgroundLg} alt="background" className="background2_lg" />
        <h3>互動式網頁設計</h3>
        <img src={designerGenie} alt="designer" className="designer" />
        <img src={frontEndGenie} alt="front-end" className="front-end" />
      </div>
    </StyledDiv>
  );
}

export default Part3;
