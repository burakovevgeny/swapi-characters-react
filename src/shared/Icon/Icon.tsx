import React, { FC } from 'react';
import { memo } from 'react';

import * as S from './Icon.styled';

interface PropTypes {
  icon: string;
}

const Icon: FC<PropTypes> = memo(({ icon }) => {
  return <S.IconWrapper className={`mdi ${icon}`} />;
});

export { Icon };
