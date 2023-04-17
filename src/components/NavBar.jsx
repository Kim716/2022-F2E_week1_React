import styled from 'styled-components';
import Button from './elements/Button';
import Link from './elements/Link';

const StyledNav = styled.nav``;

function NavBar() {
  return (
    <StyledNav>
      <Link href="#root">資訊資訊</Link>
      <Button>註冊報名</Button>
    </StyledNav>
  );
}

export default NavBar;
