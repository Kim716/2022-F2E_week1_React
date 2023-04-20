import styled from 'styled-components';
import { device } from '../globalStyles';

import sponsor1 from '../assets/company1.png';
import sponsor2 from '../assets/company2.png';
import sponsor3 from '../assets/company3.png';

const StyledDiv = styled.div`
  background-color: var(--yellow-1);

  .sponsors {
    margin: 16px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .sponsor {
    background-color: #fff;
    border: 1px solid var(--pink-2);
    border-radius: 10%;
    padding: 32px 0;
  }

  @media screen and (${device.sm}) {
    .sponsors {
      margin-top: 32px;
      gap: 24px;
    }
  }
`;

function Part8() {
  return (
    <StyledDiv className="part-container">
      <h2>贊助單位</h2>
      <div className="sponsors">
        <div className="sponsor">
          <img src={sponsor1} alt="sponsor1" />
        </div>
        <div className="sponsor">
          <img src={sponsor2} alt="sponsor2" />
        </div>
        <div className="sponsor">
          <img src={sponsor3} alt="sponsor3" />
        </div>
      </div>
    </StyledDiv>
  );
}

export default Part8;
