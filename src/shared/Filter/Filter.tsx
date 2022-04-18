import React, { FC, useEffect, useState } from 'react';

import { Gender, People } from '../../models';
import { Icon } from '..';
import { filterPeople, useDebounce } from '../../helpers';

import * as S from './Filter.styled';

interface PropsTypes {
  data: People[];
  setFilteredPeople: React.Dispatch<React.SetStateAction<People[]>>;
}

const Filter: FC<PropsTypes> = ({ data, setFilteredPeople }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Gender>(Gender.ALL);

  const debouncedValue = useDebounce(search, 500);
  const onSearchValue = ($event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch($event?.target.value);
  };

  useEffect(() => {
    setFilteredPeople(filterPeople(data, filter, debouncedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, filter, debouncedValue]);

  return (
    <S.FilterWrapper>
      <S.Input type="text" value={search} onChange={onSearchValue} />
      <S.GenderWrapper>
        <S.GenderTitle active={filter === Gender.FEMALE} onClick={() => setFilter(Gender.FEMALE)}>
          <Icon icon="mdi-gender-female" />
          <p>Female</p>
        </S.GenderTitle>
        <S.GenderTitle active={filter === Gender.MALE} onClick={() => setFilter(Gender.MALE)}>
          <Icon icon="mdi-gender-male" />
          <p>Male</p>
        </S.GenderTitle>
        <S.GenderTitle active={filter === Gender.ALL} onClick={() => setFilter(Gender.ALL)}>
          <Icon icon="mdi-gender-male-female" />
          <p>All</p>
        </S.GenderTitle>
      </S.GenderWrapper>
    </S.FilterWrapper>
  );
};

export { Filter };
