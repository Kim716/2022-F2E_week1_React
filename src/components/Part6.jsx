import styled from 'styled-components';

import background3 from '../assets/background3.png';
import genie1 from '../assets/info_genie1.png';
import genie2 from '../assets/info_genie2.png';

const StyleDiv = styled.div`
  position: relative;
  background-image: url(${background3});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  h3 {
    margin: 8px 0 40px;
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.15em;
  }

  .info-container {
    width: 100%;

    img {
      position: relative;
      width: 30%;
      max-width: 105px;
    }
  }

  .info {
    width: 100%;
    padding: 16px 24px;
    border: 1px solid var(--pink-2);
    border-radius: 20px;
  }

  .info-content {
    margin-top: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 0.875rem;
    text-align: justify;
    letter-spacing: 0.16em;
  }

  .purple {
    display: block;
    color: var(--purple-3);
  }

  .smaller {
    display: block;
  }

  .genie1 {
    margin: 16px 0;
    left: 20%;
  }

  .genie2 {
    left: 50%;
  }
`;

function Part6() {
  return (
    <StyleDiv className="part-container">
      <h2>額外競賽</h2>
      <h3>區區修煉已經無法滿足了嗎？還有比賽等著你！</h3>
      <div className="infos-container">
        <div className="info-container">
          <div className="info">
            <h4 className="info-title">評審機制</h4>
            <ul className="info-content">
              <li>
                初選：將由六角學院前端、UI 評審進行第一波篩選，並於
                12/5（五）公布初選佳作名單
              </li>
              <li>
                決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
                12/23（五）公布企業得獎名單
              </li>
            </ul>
          </div>
          <img src={genie1} alt="yellow and blue genies" className="genie1" />
        </div>
        <div className="info-container">
          <div className="info">
            <h4 className="info-title">獎項</h4>
            <ul className="info-content">
              <li>
                初選佳作 共六十位 <span className="purple">數位獎狀</span>
                <span className="smaller">每週主題個人組十位、團體組十組</span>
              </li>
              <li>
                個人企業獎 共六位
                <span className="purple">NTD 3,000/位</span>
                <span className="smaller">
                  每週主題各兩位，設計一位、前端一位
                </span>
              </li>
              <li>
                團體企業獎 共三組
                <span className="purple">NTD 10,000/組</span>
                <span className="smaller">每週主題各一組</span>
              </li>
              <li>以上皆提供完賽數位獎狀</li>
            </ul>
          </div>
          <img src={genie2} alt="yellow genie" className="genie2" />
        </div>
      </div>
    </StyleDiv>
  );
}

export default Part6;
