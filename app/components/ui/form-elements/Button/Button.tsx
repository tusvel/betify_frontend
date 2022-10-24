import cn from 'classnames';
import { FC } from 'react';

import { IButton } from '@/ui/form-elements/form.interface';

import styles from './Button.module.scss';

const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
