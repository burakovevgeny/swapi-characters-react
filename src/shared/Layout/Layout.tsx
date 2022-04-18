import React, { FC } from 'react';
import { Footer, Header } from '..';

import * as S from './Layout.styled';

const Layout: FC = ({ children }) => (
  <S.LayoutWrapper>
    <Header />
    {children}
    <Footer />
  </S.LayoutWrapper>
);

export { Layout };
