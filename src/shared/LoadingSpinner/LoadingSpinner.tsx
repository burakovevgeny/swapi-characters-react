import { FC } from 'react';
import { BounceLoader } from 'react-spinners';

interface PropTypes {
  size: number;
  color?: string;
}

const LoadingSpinner: FC<PropTypes> = ({ size, color }) => <BounceLoader size={size} color={color} />;

export { LoadingSpinner };
