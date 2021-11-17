import React, { FC } from 'react';
import { Header, Footer } from '..';

import * as S from './Layout.styled';

const Layout: FC = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </S.LayoutWrapper>
  );
};

export { Layout };
