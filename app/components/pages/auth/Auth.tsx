import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import AuthFields from '@/pages/auth/AuthFields';
import { IAuthInput } from '@/pages/auth/auth.interface';
import { useAuthRedirect } from '@/pages/auth/useAuthRedirect';

import Logo from '@/ui/Logo/Logo';
import Button from '@/ui/form-elements/Button/Button';
import Field from '@/ui/form-elements/Field/Field';

import { useAuth } from '@/hooks/useAuth';

import hiImage from '@/assets/images/auth/hi.jpg';

import Meta from '@/utils/meta/Meta';

import styles from './Auth.module.scss';

const Auth: FC = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();

  const [type, setType] = useState<'login' | 'register'>('login');

  const {
    register: registerInput,
    formState,
    handleSubmit,
    reset,
    watch
  } = useForm<IAuthInput>({
    mode: 'onChange'
  });

  const login = () => {};
  const register = () => {};

  const onSubmit = () => {
    if (type === 'login') {
      login();
    } else {
      register();
    }
    reset();
  };

  return (
    <Meta title="Auth">
      <div className={styles.auth}>
        <div className={styles.blockImage}>
          <Image
            className={styles.image}
            src={hiImage}
            alt="Welcome to Betify"
          />
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
            </a>
          </Link>
          <h1 className={styles.title}>Listen to music on Betify</h1>
        </div>
        <div className={styles.content}>
          <div></div>
          <div>
            <span className={styles.authWelcome}>Welcome to Betify</span>
            <h2 className={styles.authTitle}>
              {type === 'login'
                ? 'Login to your account'
                : 'Create your account'}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <AuthFields
                formState={formState}
                register={registerInput}
                isPasswordRequired={true}
              />
              {type === 'register' && (
                <>
                  <Field
                    {...registerInput('repeat_password', {
                      required: 'Please repeat password',
                      validate: (value) => {
                        if (watch('password') !== value) {
                          return 'Your passwords do no match';
                        }
                      }
                    })}
                    placeholder="Please repeat password"
                    error={formState.errors.repeat_password}
                    type="password"
                  />
                </>
              )}
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() =>
                  type === 'login' ? setType('login') : setType('register')
                }
                className="mt-7"
              >
                {type === 'login' ? 'Login now' : 'Register'}
              </Button>
            </form>
          </div>
          <div className={styles.link}>
            {type === 'login' ? (
              <div>
                Dont have an account?{' '}
                <button onClick={() => setType('register')}>Register</button>
              </div>
            ) : (
              <div>
                Do have an account?{' '}
                <button onClick={() => setType('login')}>Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Auth;
