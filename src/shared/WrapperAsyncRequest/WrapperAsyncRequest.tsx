import React, { FC } from 'react';
import { LoadingSpinner } from '../index';
import { APIStatus, Color } from '../../models';

import * as S from './WrapperAsyncRequest.styled';

interface PropTypes {
  status: APIStatus;
}

const WrapperAsyncRequest: FC<PropTypes> = ({ children, status }) => {
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
            <LoadingSpinner size={180} color={Color.YELLOW} />
          </S.RootWrapper>
        );
    }
  };

  return renderWrapper();
};

export { WrapperAsyncRequest };
