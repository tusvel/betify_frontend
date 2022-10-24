import { forwardRef } from 'react';

import { IField } from '@/ui/form-elements/form.interface';

import styles from './Field.module.scss';

export const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={styles.field} style={style}>
        <label className={styles.label}>
          <span className={styles.placeholder}>{placeholder}</span>
          <input className={styles.input} ref={ref} type={type} {...rest} />
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field';

export default Field;
