import styled from 'styled-components';

const FilterWrapper = styled.div`
  position: absolute;
  top: 120px;
  min-width: 210px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.yellow};

  &:focus {
    box-shadow: ${({ theme }) => theme.colors.yellow} 0px 0px 8px 8зч;
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const GenderTitle = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    color: ${({ active, theme }) => (active ? theme.colors.yellow : theme.colors.white)};
  }
  span {
    cursor: pointer;
    margin: 10px;
    color: ${({ active, theme }) => (active ? theme.colors.yellow : theme.colors.white)};
  }
`;

export { FilterWrapper, Input, GenderWrapper, GenderTitle };
