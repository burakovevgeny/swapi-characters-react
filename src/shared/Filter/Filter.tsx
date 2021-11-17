import React, { FC } from 'react';

import { Gender } from '../../models';
import { Icon } from '..';

import * as S from './Filter.styled';

interface PropsTypes {
  search: string;
  filter: Gender;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<Gender>>;
}

const Filter: FC<PropsTypes> = ({ search, filter, setSearch, setFilter }) => {
  const onSearchValue = ($event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch($event?.target.value);
  };

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
