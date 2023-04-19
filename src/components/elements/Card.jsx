import styled from 'styled-components';
import { device } from '../../globalStyles';

import Button from './Button';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid var(--pink-2);
  border-radius: 20px;

  .cardBack {
    position: absolute;
    top: 0;
    border-radius: inherit;

    background-color: ${(props) => {
      switch (props.week) {
        case 1: {
          return 'var(--yellow-3)';
        }
        case 2: {
          return 'var(--blue-2)';
        }
        case 3: {
          return 'var(--purple-2)';
        }
        default: {
          return '';
        }
      }
    }};
    width: 100%;
    height: 100%;
    display: none; //!!!
    justify-content: center;
    align-items: center;
  }

  .cardFront {
    border-radius: inherit;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      border-radius: 20px 20px 0 0;
    }

    .content {
      padding: 24px 32px;
      border-bottom: 1px solid var(--pink-2);

      div {
        display: flex;
        gap: 8px;
      }

      .title {
        margin-top: 24px;
        letter-spacing: 0.065em;
      }
    }

    .footer {
      margin: 16px 0;
      text-align: center;
    }
  }

  @media screen and (${device.sm}) {
    .title {
      font-size: 1.25rem;
    }
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  background-color: ${(props) => {
    if (props.filled) {
      switch (props.week) {
        case 1: {
          return 'var(--yellow-3)';
        }
        case 2: {
          return 'var(--blue-2)';
        }
        case 3: {
          return 'var(--purple-2)';
        }
        default: {
          return '#FFF';
        }
      }
    } else {
      return '#FFF';
    }
  }};
  border: ${(props) => {
    switch (props.week) {
      case 1: {
        return '1.5px solid var(--yellow-3)';
      }
      case 2: {
        return '1.5px solid var(--blue-2)';
      }
      case 3: {
        return '1.5px solid var(--purple-2)';
      }
      default: {
        return '';
      }
    }
  }};
  padding: 8px 20px;
  color: ${(props) => props.week === 3 && props.filled && '#FFF'};
  font-size: 0.5rem;

  @media screen and (${device.sm}) {
    font-size: 0.875rem;
  }
`;

function Card({ imgSrc, week, topic, title, sponsor }) {
  return (
    <StyledDiv week={week}>
      {/* <!-- 背面 --> */}
      <div className="card-1 card-1-back cardBack">
        <Button
          outline
          // href="https://2022.thef2e.com/news/week1"
        >
          查看關卡細節
        </Button>
      </div>

      {/* <!-- 正面 --> */}
      <div className="card-1 card-1-front cardFront">
        <img src={imgSrc} alt="card img" />
        <div className="content">
          <div>
            <StyledSpan week={week}>week{week}</StyledSpan>
            <StyledSpan week={week} filled>
              {topic}
            </StyledSpan>
          </div>
          <p className="title">{title}</p>
        </div>
        <p className="footer">贊助商：{sponsor}</p>
      </div>
    </StyledDiv>
  );
}

export default Card;
