import styled from 'styled-components';
import { device } from '../../globalStyles';

const StyledButton = styled.button`
  position: relative;
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => (props.outline ? '0' : '999px')};
  background-color: ${(props) => (props.outline ? '#FFF' : 'var(--yellow-3)')};
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    outline: ${(props) => props.outline || '8px solid var(--yellow-1)'};
    background-color: ${(props) => props.outline && 'var(--pink-1)'};
  }

  div {
    position: absolute;
    top: 2px;
    left: 2px;

    width: 100%;
    height: 100%;
    border-right: 1px solid var(--pink-2);
    border-bottom: 1px solid var(--pink-2);
    pointer-events: none;
  }

  @media screen and (${device.sm}) {
    font-size: 0.875rem;
    padding: 12px 32px;

    div {
      font-size: 0.875rem;
      padding: 12px 32px;
    }
  }

  @media screen and (${device.md}) {
    font-size: 1.25rem;
    padding: 16px 40px;

    div {
      font-size: 1.25rem;
      padding: 16px 40px;
    }
  }
`;

function Button({ children, outline }) {
  return (
    <StyledButton outline={outline}>
      {outline && <div />}
      {children}
    </StyledButton>
  );
}

export default Button;
