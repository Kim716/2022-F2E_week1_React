import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../globalStyles';

import Button from './elements/Button';
import Link from './elements/Link';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Menu } from '../assets/menu.svg';
import Container from './Container';

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;

  .logo {
    width: 50%;
    max-width: 310px;
  }

  .nav-xs {
    display: flex;
    align-items: center;

    button {
      margin-right: 16px;
    }
  }

  .menu {
    cursor: pointer;

    &:hover {
      path {
        fill: var(--purple-3);
      }
    }

    @media screen and (${device.lg}) {
      display: none;
    }
  }

  .menu-list {
    position: absolute;
    top: 100%;
    left: 0;

    li {
      border: 1px solid var(--pink-2);
      list-style: none;

      ul {
        display: block;
        width: 100%;
        text-align: center;

        button {
          margin: 16px 0;
        }
      }
    }

    @media screen and (${device.lg}) {
      display: none;
    }
  }
`;

function NavBar() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleMenuClick = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <StyledNav>
      <Logo className="logo" />
      <div className="nav-xs">
        <Button>註冊報名</Button>
        <Menu className="menu" onClick={handleMenuClick} />
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
              <Button>登入</Button>
            </ul>
          </li>
        </Container>
      )}
    </StyledNav>
  );
}

export default NavBar;
