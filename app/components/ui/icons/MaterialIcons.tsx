import { FC } from 'react';
import * as MaterialIcon from 'react-icons/md';

import { TypeMaterialIconName } from '@/types/icons.types';

const MaterialIcons: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconMaterial = MaterialIcon[name];

  return <IconMaterial /> || MaterialIcon['MdCached'];
};

export default MaterialIcons;
