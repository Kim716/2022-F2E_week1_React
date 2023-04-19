import styled from 'styled-components';
import { device } from '../globalStyles';

import q1Genie from '../assets/q1.png';
import q2Genie from '../assets/q2.png';
import q3Genie from '../assets/q3.png';

const StyledDiv = styled.div`
  background-color: var(--yellow-1);
  position: relative;
  width: 100%;
  height: 100%;

  .question {
    background: #fff;
    width: 100%;
    max-width: 900px;
    border: 1px solid var(--pink-2);
    border-radius: 10px;
    padding: 10px 0;
    margin: 36px auto 0;

    font-size: 0.75rem;
    text-align: center;
  }

  img {
    position: absolute;
    left: 10%;
    height: 15%;
  }

  .q1-genie {
    top: 16.5%;
  }

  .q2-genie {
    top: 39.3%;
  }

  .q3-genie {
    top: 62%;
  }

  @media screen and (${device.sm}) {
    img {
      height: 20%;
    }

    .question {
      font-size: 1rem;
    }

    .q1-genie {
      top: 10%;
    }

    .q2-genie {
      top: 33.5%;
    }

    .q3-genie {
      top: 56.5%;
    }
  }

  @media screen and (${device.md}) {
    .q1-genie {
      top: 11.3%;
    }

    .q2-genie {
      top: 34.5%;
    }

    .q3-genie {
      top: 56.8%;
    }
  }

  @media screen and (${device.ipad}) {
    .q1-genie {
      top: 14%;
    }

    .q2-genie {
      top: 35.8%;
    }

    .q3-genie {
      top: 57.5%;
    }
  }

  @media screen and (${device.lg}) {
    img {
      left: 20%;
    }

    .question {
      font-size: 1.25rem;
      margin-top: 40px;
    }

    .q1-genie {
      top: 15.5%;
    }

    .q2-genie {
      top: 34.5%;
    }

    .q3-genie {
      top: 53%;
    }
  }
`;

function Part2() {
  return (
    <StyledDiv className="part-container">
      <h2>你是否也遇到以下問題？</h2>
      <div className="question">
        <span className="page-2-q1">羨慕別人的酷酷網頁動畫？</span>
        <span className="cursor1">_</span>
      </div>
      <div className="question">
        <span className="page-2-q2">滿足不了同事的許願？</span>
        <span className="cursor2">_</span>
      </div>
      <div className="question">
        <span className="page-2-q3">動畫技能樹太雜無從下手？</span>
        <span className="cursor3">_</span>
      </div>
      <img src={q1Genie} alt="q1Genie" className="q1-genie" />
      <img src={q2Genie} alt="q2Genie" className="q2-genie" />
      <img src={q3Genie} alt="q3Genie" className="q3-genie" />
    </StyledDiv>
  );
}

export default Part2;
