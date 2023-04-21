import styled from 'styled-components';
import { device } from '../../globalStyles';

import Button from './Button';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  .card-side {
    border-radius: 20px;
    border: 1px solid var(--pink-2);
    transition: all 0.8s ease;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .card-back {
    position: absolute;
    top: 0;

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
    display: flex;
    justify-content: center;
    align-items: center;

    // 翻轉動畫
    transform: rotateY(-180deg);
  }

  .card-front {
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

  // 翻轉動畫
  &:hover .card-side.card-front {
    transform: rotateY(180deg);
  }

  &:hover .card-side.card-back {
    transform: rotateY(0deg);
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
      {/* <!-- 正面 --> */}
      <div className="card-side card-front">
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

      {/* <!-- 背面 --> */}
      <div className="card-side card-back">
        <Button
          outline
          // href="https://2022.thef2e.com/news/week1"
        >
          查看關卡細節
        </Button>
      </div>
    </StyledDiv>
  );
}

export default Card;
