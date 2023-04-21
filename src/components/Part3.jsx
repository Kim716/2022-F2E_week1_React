import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { device } from '../globalStyles';

import backgroundLgSrc from '../assets/background2.png';
import backgroundMdSrc from '../assets/background2_md.png';
import designerGenieSrc from '../assets/designer.png';
import frontEndGenieSrc from '../assets/fe.png';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

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
    .anime-area {
      margin-top: 24px;

      h3 {
        font-size: 1.25rem;
      }
    }
  }

  @media screen and (${device.md}) {
    .anime-area {
      margin-top: 32px;

      h3 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (${device.ipad}) {
    .anime-area {
      margin-top: 40px;

      h3 {
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (${device.lg}) {
    .anime-area {
      margin-top: 48px;

      h3 {
        font-size: 3.5rem;
      }
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

function Part3() {
  const part3 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.title',
          start: 'top 70%',
          end: 'top 40%',
          scrub: true,
        },
      });

      // 隨者視窗滑動 字體放大，兩側出現小精靈
      tl.from('.title', { fontSize: '10px' })
        .from('.designer', { left: '-50%' }, '<')
        .from('.front-end', { left: '150%' }, '<');
    }, part3);

    return () => ctx.revert();
  });

  return (
    <StyledDiv className="part-container" ref={part3}>
      <h2>設計師與工程師進行攜手合作</h2>
      <div className="anime-area">
        <img
          src={backgroundMdSrc}
          alt="background"
          className="background2_md"
        />
        <img
          src={backgroundLgSrc}
          alt="background"
          className="background2_lg"
        />
        <h3 className="title">互動式網頁設計</h3>
        <img src={designerGenieSrc} alt="designer" className="designer" />
        <img src={frontEndGenieSrc} alt="front-end" className="front-end" />
      </div>
    </StyledDiv>
  );
}

export default Part3;
