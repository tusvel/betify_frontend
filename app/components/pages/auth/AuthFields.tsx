import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import Field from '@/ui/form-elements/Field/Field';

import { validEmail } from '@/shared/regex';

interface IAuthFields {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({
  isPasswordRequired = false,
  formState: { errors },
  register
}) => {
  return (
    <div>
      <Field
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        })}
        placeholder="E-Mail"
        error={errors.email}
      />
      <Field
        {...register(
          'password',
          isPasswordRequired
            ? {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Min length should more 6 symbols'
                }
              }
            : {}
        )}
        type="password"
        placeholder="Password"
        error={errors.password}
      />
    </div>
  );
};

export default AuthFields;
