import styled from 'styled-components';

import Button from './elements/Button';

import background4 from '../assets/background4.png';
import star from '../assets/star.png';

const StyledDiv = styled.div`
  position: relative;
  min-height: 240px;

  .background {
    min-height: 240px;
    object-fit: cover;
  }

  .star {
    position: absolute;
    z-index: 2;
    top: 49px;
    left: 50%;
    transform: translateX(-50%);
  }

  .content {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 170px;
    background-color: #fff;
    border-top: 1px solid var(--pink-2);
    border-radius: 160px 160px 0 0;
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
`;

function Part7() {
  return (
    <StyledDiv>
      <img src={background4} alt="background" className="background" />
      <img src={star} alt="星星" className="star" />
      <div className="content">
        <h3>你要的修煉都在 The F2E</h3>
        <p>三週精實修煉，一次提升實力</p>
        <Button>我要報名</Button>
      </div>
    </StyledDiv>
  );
}

export default Part7;
