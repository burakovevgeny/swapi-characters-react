import React, { FC, useState } from 'react';
import { Homeworld } from '../../models';
import { useSelector } from '../../redux';

import { getFavorites } from '../../redux/mainSlice';
import { Card, Filter, Layout } from '../../shared';
import { getIdAndQuery } from '../../helpers';

import * as S from './Favorite.styled';

const Favorite: FC = () => {
  const { favoriteData } = useSelector(getFavorites);
  const [filteredPeople, setFilteredPeople] = useState(favoriteData);

  const renderContent = () => {
    if (!filteredPeople.length) {
      return <S.Title>No favorites, Jedi!</S.Title>;
    }
    return filteredPeople.map(({ url, homeworld, name }) => {
      const planet = homeworld as Homeworld;
      const { id } = getIdAndQuery(url);
      return <Card key={name} id={id} name={name} planet={planet.name} />;
    });
  };

  return (
    <Layout>
      <Filter data={favoriteData} setFilteredPeople={setFilteredPeople} />
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        <S.CardWrapper>{renderContent()}</S.CardWrapper>
      </>
    </Layout>
  );
};

export { Favorite };
