import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 24px 40px;
  justify-content: center;
  box-shadow: 0px -5px 5px ${({ theme }) => theme.colors.yellow};
  margin-top: 20px;
`;

export { FooterWrapper };
