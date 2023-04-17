import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  padding: 0 8px;
`;

function Container({ children, className }) {
  return <StyledDiv className={className}>{children}</StyledDiv>;
}

export default Container;
