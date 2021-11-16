import { FC } from 'react';

import * as S from './Card.styled';

interface PropTypes {
  id: string;
  planet: string;
  name: string;
}

const Card: FC<PropTypes> = ({ id, planet, name }) => {
  const FULL_URL = `${process.env.REACT_APP_URL_HOSTNAME}/${id}.jpg`;
  return (
    <S.CardWrapper>
      <S.Avatar src={FULL_URL} alt='avatar' />
      <S.TitleWrapper>
        <S.Title>Name: {name}</S.Title>
        <S.Title>Planet: {planet}</S.Title>
      </S.TitleWrapper>
    </S.CardWrapper>
  );
};

export { Card };
