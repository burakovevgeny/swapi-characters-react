import React, { FC, memo } from 'react';

import * as S from './Icon.styled';

interface PropTypes {
  icon: string;
  onClick?: () => void;
}

const Icon: FC<PropTypes> = memo(({ icon, onClick }) => <S.IconWrapper className={`mdi ${icon}`} onClick={onClick} />);

export { Icon };
