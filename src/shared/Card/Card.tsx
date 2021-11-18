import { FC } from 'react';
import { useDispatch, useSelector } from '../../redux';
import { addToFavorite, removeFromFavorite, getCharacters, getFavorites } from '../../redux/mainSlice';

import { Icon } from '..';

import * as S from './Card.styled';

interface PropTypes {
  id: string;
  planet: string;
  name: string;
}

const Card: FC<PropTypes> = ({ id, planet, name }) => {
  const FULL_URL = `${process.env.REACT_APP_URL_HOSTNAME}/${id}.jpg`;

  const { data } = useSelector(getCharacters);
  const { favoriteData } = useSelector(getFavorites);

  const dispatch = useDispatch();

  const checkFavorite = (name: string) => {
    return (
      data.find((character) => favoriteData.find((favorite) => favorite.name === name)) ||
      favoriteData.find((favorite) => favorite.name === name)
    );
  };

  const setFavoriteList = (name: string) => {
    const candidate = data.find((character) => character.name === name);

    if (checkFavorite(name)) {
      dispatch(removeFromFavorite(name));
    } else if (candidate) {
      dispatch(addToFavorite(candidate));
    }
  };

  return (
    <S.CardWrapper>
      <S.Avatar src={FULL_URL} alt='avatar' />
      <S.TitleWrapper>
        <S.Title>Name: {name}</S.Title>
        <S.Title>Planet: {planet}</S.Title>
        <Icon
          icon={checkFavorite(name) ? 'mdi-account-heart' : 'mdi-account-heart-outline'}
          onClick={() => setFavoriteList(name)}
        />
      </S.TitleWrapper>
    </S.CardWrapper>
  );
};

export { Card };
