import styled from 'styled-components';
import { device } from '../../globalStyles';

const StyledLink = styled.a`
  display: block;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--purple-3);
  text-align: center;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: var(--pink-1);
  }

  @media screen and (${device.sm}) {
    font-size: 0.875rem;
  }

  @media screen and (${device.md}) {
    font-size: 1.25rem;
    padding: 24px;
  }

  @media screen and (${device.lg}) {
    display: inline;

    &:hover {
      background-color: #fff;
      color: var(--pink-2);
    }
  }
`;

function Link({ children }) {
  return <StyledLink>{children}</StyledLink>;
}

export default Link;
