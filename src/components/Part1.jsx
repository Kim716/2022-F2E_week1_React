import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { device } from '../globalStyles';

import backgroundLgSrc from '../assets/background1.png';
import backgroundMdSrc from '../assets/background1_md.png';
import genieSrc from '../assets/genie.png';

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .background1_md,
  .background1_lg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .background1_lg {
    display: none;
  }

  h1 {
    position: absolute;
    top: 68%;
    left: 26%;

    color: var(--purple-3);
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.135em;
  }

  .genie {
    position: absolute;
    top: 30%;
    left: 0;

    width: 25%;
  }

  @media screen and (min-width: 375px) {
    h1 {
      left: 32%;
    }
  }

  @media screen and (${device.sm}) {
    h1 {
      top: 68.5%;

      font-size: 1.25rem;
    }
  }

  @media screen and (${device.md}) {
    h1 {
      top: 68%;
      left: 29%;

      font-size: 1.875rem;
    }
  }

  @media screen and (${device.ipad}) {
    h1 {
      top: 68%;
      left: 30%;

      font-size: 2.5rem;
    }
  }

  @media screen and (${device.lg}) {
    .background1_md {
      display: none;
    }

    .background1_lg {
      display: block;
    }

    h1 {
      top: 62%;
      left: 38%;

      font-size: 3rem;
    }

    .genie {
      top: 15%;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

function Part1() {
  const genie = useRef();

  useEffect(() => {
    const genieEl = genie.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: genieEl,
        markers: true,
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });

    if (window.innerWidth >= 1420) {
      tl.to(genieEl, {
        top: '40%',
      }).to(genieEl, {
        left: '13%',
      });
    } else {
      tl.to(genieEl, {
        top: '40%',
      }).to(genieEl, {
        left: '30%',
      });
    }

    return () => tl.revert();
  }, []);
  // !!! 正常來說使用者應該不會再使用網頁時隨意拉動螢幕寬度，但在開發時會，如果沒有讓 useEffect 隨寬度拉動而調整，會導致被指定動畫的元素 css 被卡住，或神奇的狀況發生 ex. navbar 沒有隨著調整大小...
  //  }, [window.innerWidth]);

  return (
    <StyledDiv>
      <img src={backgroundMdSrc} alt="background" className="background1_md" />
      <img src={backgroundLgSrc} alt="background" className="background1_lg" />
      <h1>The F2E 4th 互動式網頁設計</h1>
      <img src={genieSrc} alt="genie" className="genie" ref={genie} />
    </StyledDiv>
  );
}

export default Part1;
