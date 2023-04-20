import styled from 'styled-components';
import { device } from '../globalStyles';

const StyleDiv = styled.div`
  padding: 12px 0;

  p {
    font-size: 10px;
    text-align: center;
  }

  @media screen and (${device.sm}) {
    padding: 40px 0;

    p {
      font-size: 0.875rem;
    }
  }

  @media screen and (${device.ipad}) {
    p {
      font-size: 1.25rem;
    }
  }
`;

function Footer() {
  return (
    <StyleDiv>
      <p>Copyright © 2022 HexSchool.All rights reserved.</p>
    </StyleDiv>
  );
}

export default Footer;
