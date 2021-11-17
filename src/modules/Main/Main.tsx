import React, { FC, useEffect, useState } from 'react';
import { APIStatus, Homeworld } from '../../models';
import { useDispatch, useSelector } from '../../redux';

import { fetchPeople } from '../../redux/actions';
import { getCharacters } from '../../redux/mainSlice';
import { Layout, Card, WrapperAsyncRequest, Filter } from '../../shared';
import { getIdAndQuery, useDebounce, filterPeople } from '../../helpers';
import { Gender } from '../../models';

import * as S from './Main.styled';

const Main: FC = () => {
  const { data, status } = useSelector(getCharacters);

  const [search, setSearch] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(data);
  const [filter, setFilter] = useState<Gender>(Gender.ALL);

  const debouncedValue = useDebounce(search, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== APIStatus.Success) {
      dispatch(fetchPeople());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredPeople(filterPeople(data, filter, debouncedValue));
  }, [data, filter, debouncedValue]);

  const renderContent = () => {
    if (!filteredPeople.length && status === APIStatus.Success) {
      return <S.Title>No data to display, Jedi!</S.Title>;
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
      <WrapperAsyncRequest status={status}>
        <S.CardWrapper>{renderContent()}</S.CardWrapper>
      </WrapperAsyncRequest>
    </Layout>
  );
};

export { Main };
