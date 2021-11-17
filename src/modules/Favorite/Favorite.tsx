import React, { FC, useEffect, useState } from 'react';
import { Homeworld } from '../../models';
import { useSelector } from '../../redux';

import { getFavorites } from '../../redux/mainSlice';
import { Layout, Card, Filter } from '../../shared';
import { getIdAndQuery, useDebounce, filterPeople } from '../../helpers';
import { Gender } from '../../models';

import * as S from './Favorite.styled';

const Favorite: FC = () => {
  const { favoriteData } = useSelector(getFavorites);

  const [search, setSearch] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(favoriteData);
  const [filter, setFilter] = useState<Gender>(Gender.ALL);

  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    setFilteredPeople(filterPeople(favoriteData, filter, debouncedValue));
  }, [favoriteData, filter, debouncedValue]);

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
      <Filter search={search} filter={filter} setSearch={setSearch} setFilter={setFilter} />
      <>
        <S.CardWrapper>{renderContent()}</S.CardWrapper>
      </>
    </Layout>
  );
};

export { Favorite };
