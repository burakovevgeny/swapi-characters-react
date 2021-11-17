import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  padding: 40px;
  margin-top: 100px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 10px;
    justify-content: center;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 34px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export { CardWrapper, Title };
