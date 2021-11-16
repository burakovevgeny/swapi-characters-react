import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  height: 150px;
  box-shadow: ${({ theme }) => theme.colors.yellow} 0px 0px 8px;
  margin: 10px;
  display: flex;
`;

const Avatar = styled.img`
  max-width: 150px;
  max-height: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 16px;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export { CardWrapper, Avatar, Title, TitleWrapper };
