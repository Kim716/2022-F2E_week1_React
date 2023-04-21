import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import styled from 'styled-components';
import { device } from '../globalStyles';

import q1GenieSrc from '../assets/q1.png';
import q2GenieSrc from '../assets/q2.png';
import q3GenieSrc from '../assets/q3.png';

const StyledDiv = styled.div`
  background-color: var(--yellow-1);
  position: relative;
  width: 100%;
  height: 100%;

  .question {
    background: #fff;
    width: 100%;
    max-width: 900px;
    border: 1px solid var(--pink-2);
    border-radius: 10px;
    padding: 10px 0;
    margin: 36px auto 0;

    font-size: 0.75rem;
    text-align: center;
  }

  img {
    position: absolute;
    left: 10%;
    height: 15%;
  }

  .q1-genie {
    top: 16.5%;
  }

  .q2-genie {
    top: 39.3%;
  }

  .q3-genie {
    top: 62%;
  }

  @media screen and (${device.sm}) {
    img {
      height: 20%;
    }

    .question {
      font-size: 1rem;
    }

    .q1-genie {
      top: 10%;
    }

    .q2-genie {
      top: 33.5%;
    }

    .q3-genie {
      top: 56.5%;
    }
  }

  @media screen and (${device.md}) {
    .q1-genie {
      top: 11.3%;
    }

    .q2-genie {
      top: 34.5%;
    }

    .q3-genie {
      top: 56.8%;
    }
  }

  @media screen and (${device.ipad}) {
    .q1-genie {
      top: 14%;
    }

    .q2-genie {
      top: 35.8%;
    }

    .q3-genie {
      top: 57.5%;
    }
  }

  @media screen and (${device.lg}) {
    img {
      left: 20%;
    }

    .question {
      font-size: 1.25rem;
      margin-top: 40px;
    }

    .q1-genie {
      top: 15.5%;
    }

    .q2-genie {
      top: 34.5%;
    }

    .q3-genie {
      top: 53%;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Part2() {
  const part2 = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 游標出現在畫面就保持閃爍
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.cursor',
            toggleActions: 'play pause resume reset',
          },
        })
        .fromTo(
          '.cursor',
          { opacity: 0 },
          { opacity: 1, duration: 1, repeat: -1 }
        );

      // 文字在同個時間軸上接續出現
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.q1',
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play pause resume reset',
          },
        })
        .to('.q1', {
          text: '羨慕別人的酷酷網頁動畫？',
          duration: 1.5,
        })
        .to('.q2', {
          text: '滿足不了同事的許願？',
          duration: 1.5,
        })
        .to('.q3', {
          text: '動畫技能樹太雜無從下手？',
          duration: 1.5,
        });
    }, part2);

    return () => ctx.revert();
  });

  return (
    <StyledDiv className="part-container" ref={part2}>
      <h2>你是否也遇到以下問題？</h2>
      <div className="question">
        <span className="q1" />
        <span className="cursor">_</span>
      </div>
      <div className="question">
        <span className="q2" />
        <span className="cursor">_</span>
      </div>
      <div className="question">
        <span className="q3" />
        <span className="cursor">_</span>
      </div>
      <img src={q1GenieSrc} alt="q1Genie" className="q1-genie" />
      <img src={q2GenieSrc} alt="q2Genie" className="q2-genie" />
      <img src={q3GenieSrc} alt="q3Genie" className="q3-genie" />
    </StyledDiv>
  );
}

export default Part2;
