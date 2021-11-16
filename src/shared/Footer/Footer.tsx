import React, { FC } from 'react';

import { Icon } from '..';

import * as S from './Footer.styled';

const GITHUB_ACCOUNT_LINK = 'https://github.com/burakovevgeny';

const Footer: FC = () => {
  return (
    <S.FooterWrapper>
      <a href={GITHUB_ACCOUNT_LINK}>
        <Icon icon='mdi-github' />
      </a>
    </S.FooterWrapper>
  );
};

export { Footer };
