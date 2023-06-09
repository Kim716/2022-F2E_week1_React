import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../globalStyles';

import Button from './elements/Button';
import Link from './elements/Link';
import logo from '../assets/logo.png';
import { ReactComponent as Menu } from '../assets/menu.svg';
import Container from './Container';

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;

  padding: 8px;

  .nav-bar {
    max-width: 1500px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    width: 50%;

    .logo {
      width: 100%;
      max-width: 310px;
    }

    a {
      display: none;
    }
  }

  .button-bar {
    display: flex;
    align-items: center;

    a:nth-of-type(1) {
      margin-right: 16px;
    }

    a:nth-of-type(2) {
      display: none;
    }
  }

  .menu {
    cursor: pointer;

    &:hover {
      path {
        fill: var(--purple-3);
      }
    }
  }

  .menu-list {
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(255, 255, 255, 0.95);
    padding-bottom: 30px;

    li {
      list-style: none;

      ul {
        display: block;
        width: 100%;
        text-align: center;

        a {
          margin: 16px 0;
        }
      }
    }
  }

  @media screen and (${device.sm}) {
    padding: 24px 32px;
  }

  @media screen and (${device.md}) {
    padding: 24px 36px;
  }

  @media screen and (${device.lg}) {
    padding: 24px 72px;

    .menu {
      display: none;
    }

    .menu-list {
      display: none;
    }

    .links {
      width: 73%;
      display: flex;
      align-items: center;

      .logo {
        margin-right: 8px;
      }

      a {
        display: inline;
      }
    }

    .button-bar {
      a:nth-of-type(2) {
        display: block;
      }
    }
  }
`;

function NavBar() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleMenuClick = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleRegisterClick = () => {
    // eslint-disable-next-line no-alert
    alert('已經過了報名期限');
  };

  return (
    <StyledNav>
      <div className="nav-bar">
        <div className="links">
          <img src={logo} alt="logo" className="logo" />
          <Link href="https://2022.thef2e.com/news">關卡資訊</Link>
          <Link href="https://2022.thef2e.com/works">作品列表</Link>
          <Link href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="_blank">
            攻略資源
          </Link>
          <Link href="https://2022.thef2e.com/jobs">求職專區</Link>
        </div>
        <div className="button-bar">
          <Button onClick={handleRegisterClick}>註冊報名</Button>
          <Menu className="menu" onClick={handleMenuClick} />
          <Button href="https://2022.thef2e.com/login">登入</Button>
        </div>
        {isMenuShow && (
          <Container className="menu-list">
            <li>
              <ul>
                <Link href="https://2022.thef2e.com/news">關卡資訊</Link>
              </ul>
              <ul>
                <Link href="https://2022.thef2e.com/works">作品列表</Link>
              </ul>
              <ul>
                <Link
                  href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w"
                  target="_blank"
                >
                  攻略資源
                </Link>
              </ul>
              <ul>
                <Link href="https://2022.thef2e.com/jobs">求職專區</Link>
              </ul>
              <ul>
                <Button href="https://2022.thef2e.com/login">登入</Button>
              </ul>
            </li>
          </Container>
        )}
      </div>
    </StyledNav>
  );
}

export default NavBar;
