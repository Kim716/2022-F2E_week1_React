import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../globalStyles';

import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png';

const StyledDiv = styled.div`
  background-color: var(--yellow-1);

  .info-container {
    max-width: 1024px;
    margin: 16px auto 0;
  }

  .tabs {
    display: flex;

    .tab {
      flex-grow: 1;
      padding: 8px 0;
      border: none;
      background-color: var(--yellow-1);
      font-size: 0.875rem;
      text-align: center;
      cursor: pointer;
    }

    .show {
      background-color: #fff;
    }
  }

  img {
    display: none;
  }

  .show {
    display: block;
  }

  @media screen and (${device.sm}) {
    .info-container {
      margin-top: 32px;
    }

    .tabs {
      .tab {
        padding: 20px 0;
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (${device.ipad}) {
    .tabs {
      .tab {
        font-size: 1.5rem;
      }
    }
  }
`;

function Part5() {
  const [isInfo1Show, setIsInfo1Show] = useState(true);

  return (
    <StyledDiv className="part-container">
      <h2>活動說明</h2>
      <div className="info-container">
        <div className="tabs">
          <button
            type="button"
            className={`tab ${isInfo1Show && 'show'}`}
            onClick={() => setIsInfo1Show(true)}
          >
            報名時間
          </button>
          <button
            type="button"
            className={`tab ${isInfo1Show || 'show'}`}
            onClick={() => setIsInfo1Show(false)}
          >
            登陸作品
          </button>
        </div>
        <img
          src={info1}
          alt="報名時間說明"
          className={`${isInfo1Show && 'show'}`}
        />
        <img
          src={info2}
          alt="登陸作品說明"
          className={`${isInfo1Show || 'show'}`}
        />
      </div>
    </StyledDiv>
  );
}

export default Part5;
