import styled from 'styled-components';
import { device } from '../globalStyles';

import Button from './elements/Button';

import background4 from '../assets/background4.png';
import star from '../assets/star.png';

const StyledDiv = styled.div`
  position: relative;
  min-height: 240px;
  height: 60vw;

  .background {
    min-height: 240px;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 75%;
    background-color: #fff;
    border-top: 1px solid var(--pink-2);
    border-radius: 99999px 99999px 0 0;
    padding-bottom: 28px;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    h3 {
      font-size: 0.875rem;
      letter-spacing: 0.16em;
    }

    p {
      margin-bottom: 16px;
      font-size: 10px;
    }
  }

  .star {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (${device.sm}) {
    .content {
      padding-bottom: 40px;

      h3 {
        font-size: 1.5rem;
      }

      p {
        margin: 17px;
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (${device.md}) {
    .content {
      padding-bottom: 50px;

      h3 {
        font-size: 2.25rem;
      }

      p {
        font-size: 1.75rem;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (${device.ipad}) {
    .content {
      height: 80%;
    }
  }

  @media screen and (${device.lg}) {
    height: auto;

    .content {
      height: 90%;
    }
  }
`;

function Part7() {
  return (
    <StyledDiv>
      <img src={background4} alt="background" className="background" />

      <div className="content">
        <img src={star} alt="星星" className="star" />
        <h3>你要的修煉都在 The F2E</h3>
        <p>三週精實修煉，一次提升實力</p>
        <Button>我要報名</Button>
      </div>
    </StyledDiv>
  );
}

export default Part7;
