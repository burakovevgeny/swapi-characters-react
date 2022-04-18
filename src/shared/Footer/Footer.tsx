import React, { FC } from 'react';

import { Icon } from '..';

import * as S from './Footer.styled';

const GITHUB_REPO_LINK = 'https://github.com/burakovevgeny/swapi-characters-react';

const Footer: FC = () => (
  <S.FooterWrapper>
    <a href={GITHUB_REPO_LINK}>
      <Icon icon="mdi-github" />
    </a>
  </S.FooterWrapper>
);

export { Footer };
