import styled from 'styled-components';
import { device } from '../globalStyles';

const StyledDiv = styled.div`
  width: 100%;
  padding: 0 8px;

  .border {
    border: 1px solid var(--pink-2);
  }

  @media screen and (${device.sm}) {
    padding: 0 32px;
  }

  @media screen and (${device.md}) {
    padding: 0 36px;
  }

  @media screen and (${device.lg}) {
    padding: 0 72px;
  }
`;

function Container({ children, className }) {
  return (
    <StyledDiv className={className}>
      <div className="border">{children}</div>
    </StyledDiv>
  );
}

export default Container;
