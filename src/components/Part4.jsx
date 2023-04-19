import styled from 'styled-components';
import Card from './elements/Card';

import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

const StyledDiv = styled.div`
  padding: 40px 16px;
  width: 100%;

  h3 {
    margin: 8px 0 40px;
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.15em;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

function Part4() {
  return (
    <StyledDiv>
      <h2>年度最強合作，三大主題來襲</h2>
      <h3>各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡</h3>
      <div className="cards">
        <Card
          imgSrc={card1}
          week={1}
          topic="視差滾動"
          title="The F2E 活動網站設計"
          sponsor="板塊設計"
        />
        <Card
          imgSrc={card2}
          week={2}
          topic="Canvas"
          title="今晚, 我想來點點簽"
          sponsor="凱鈿行動科技"
        />
        <Card
          imgSrc={card3}
          week={3}
          topic="JS draggable"
          title="Scrum 新手村"
          sponsor="鈦坦科技"
        />
      </div>
    </StyledDiv>
  );
}

export default Part4;
