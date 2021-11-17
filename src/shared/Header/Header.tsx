import React, { FC } from 'react';
import { useLocation } from 'react-router';
import { Navigation } from '../../models';

import { Icon } from '..';

import * as S from './Header.styled';

const Header: FC = () => {
  const { pathname } = useLocation();

  const menu = [
    {
      icon: 'mdi-home',
      to: Navigation.MAIN,
    },
    {
      icon: 'mdi-cards-heart',
      to: Navigation.FAVORITE,
    },
  ];

  const checkActiveStyle = (location: Navigation) => {
    return pathname.split('/').includes(location.slice(1));
  };

  return (
    <S.HeaderWrapper>
      {menu.map((item, index) => {
        return (
          <S.Title key={index} to={item.to} active={`${checkActiveStyle(item.to)}`}>
            <Icon icon={item.icon} />
          </S.Title>
        );
      })}
    </S.HeaderWrapper>
  );
};

export { Header };
