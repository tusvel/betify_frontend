import Image from 'next/image';
import { FC } from 'react';

import logoImage from '@/assets/images/logo/logo.svg';

const Logo: FC<any> = () => {
  return <Image src={logoImage} alt="Betify" />;
};

export default Logo;
