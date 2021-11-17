import React, { FC } from 'react';
import { LoadingSpinner } from '../index';
import { APIStatus, Color } from '../../models';
import { useWindowSize } from '../../helpers';

import * as S from './WrapperAsyncRequest.styled';

interface PropTypes {
  status: APIStatus;
}

const WrapperAsyncRequest: FC<PropTypes> = ({ children, status }) => {
  const { isDesktop } = useWindowSize();
  const renderWrapper = () => {
    switch (status) {
      case APIStatus.Error:
        return (
          <S.RootWrapper>
            <S.Title>OOOPS, TRY LETTER, JEDI!</S.Title>
          </S.RootWrapper>
        );
      case APIStatus.Success:
        return <>{children}</>;
      default:
        return (
          <S.RootWrapper>
            <LoadingSpinner size={isDesktop ? 180 : 90} color={Color.YELLOW} />
          </S.RootWrapper>
        );
    }
  };

  return renderWrapper();
};

export { WrapperAsyncRequest };
