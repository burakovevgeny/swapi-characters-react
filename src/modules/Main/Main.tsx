import React, { FC, useEffect, useState } from 'react';
import { APIStatus, Homeworld } from '../../models';
import { useDispatch, useSelector } from '../../redux';

import { fetchPeople } from '../../redux/actions';
import { getCharacters } from '../../redux/mainSlice';
import {
  Card, Filter, Layout, WrapperAsyncRequest,
} from '../../shared';
import { getIdAndQuery } from '../../helpers';

import * as S from './Main.styled';

const Main: FC = () => {
  const { data, status } = useSelector(getCharacters);
  const [filteredPeople, setFilteredPeople] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== APIStatus.Success) {
      dispatch(fetchPeople());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Filter data={data} setFilteredPeople={setFilteredPeople} />
      <WrapperAsyncRequest status={status}>
        <S.CardWrapper>{renderContent()}</S.CardWrapper>
      </WrapperAsyncRequest>
    </Layout>
  );
};

export { Main };
