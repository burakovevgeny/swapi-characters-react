import styled from 'styled-components';

const RootWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 34px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export { RootWrapper, Title };
