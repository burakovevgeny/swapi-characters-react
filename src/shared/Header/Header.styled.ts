import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100px;
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;
  box-shadow: 0px 5px 5px ${({ theme }) => theme.colors.yellow};
  margin-bottom: 20px;
`;

const Title = styled(NavLink)<{ active: string }>`
  font-size: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  & span {
    color: ${(props) => (props.active === 'true' ? props.theme.colors.yellow : props.theme.colors.white)};
  }
`;

export { HeaderWrapper, Title };
