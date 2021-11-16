import React, { FC, useEffect } from 'react';
import { APIStatus, Homeworld } from '../../models';
import { useDispatch, useSelector } from '../../redux';

import { fetchPeople } from '../../redux/actions';
import { getCharacters } from '../../redux/mainSlice';
import { Layout, Card, WrapperAsyncRequest } from '../../shared';
import { getIdAndQuery } from '../../helpers';

import * as S from './Main.styled';

const Main: FC = () => {
  const { data, status } = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== APIStatus.Success) {
      dispatch(fetchPeople());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <WrapperAsyncRequest status={status}>
        <S.CardWrapper>
          {data.map(({ url, homeworld, name }, index) => {
            const planet = homeworld as Homeworld;
            const { id } = getIdAndQuery(url);
            return <Card key={index} id={id} name={name} planet={planet.name} />;
          })}
        </S.CardWrapper>
      </WrapperAsyncRequest>
    </Layout>
  );
};

export { Main };
