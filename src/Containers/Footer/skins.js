import styled from 'styled-components';

export const FooterWrapper = styled.p`
  text-align: center;
  padding: 6px 12px;
  font-size: 30px;
  margin: 0;
  font-weight: bold;
  margin-top: 4%;
  > span {
    font-weight: normal;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    > span {
      display: block;
    }
  }
`;