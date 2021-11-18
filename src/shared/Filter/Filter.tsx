import React, { FC, useState, useEffect } from 'react';

import { Gender, People } from '../../models';
import { Icon } from '..';
import { useDebounce, filterPeople } from '../../helpers';

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
      <S.Input type='text' value={search} onChange={onSearchValue} />
      <S.GenderWrapper>
        <S.GenderTitle active={filter === Gender.FEMALE}>
          <Icon icon='mdi-gender-female' onClick={() => setFilter(Gender.FEMALE)} />
          <p>Female</p>
        </S.GenderTitle>
        <S.GenderTitle active={filter === Gender.MALE}>
          <Icon icon='mdi-gender-male' onClick={() => setFilter(Gender.MALE)} />
          <p>Male</p>
        </S.GenderTitle>
        <S.GenderTitle active={filter === Gender.ALL}>
          <Icon icon='mdi-gender-male-female' onClick={() => setFilter(Gender.ALL)} />
          <p>All</p>
        </S.GenderTitle>
      </S.GenderWrapper>
    </S.FilterWrapper>
  );
};

export { Filter };
