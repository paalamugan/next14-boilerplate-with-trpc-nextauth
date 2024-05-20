'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/cn';
import { LoginValidation, type LoginValidationType } from '@/validations/UserValidation';

export const SignInForm = (props: { callbackUrl: string | undefined }) => {
  const { callbackUrl = '/dashboard' } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginValidationType>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async data => {
    const { username, password } = data;
    await signIn('credentials', {
      username,
      password,
      callbackUrl,
    });
    // reset();
  });

  return (
    <form noValidate className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">
          <div className="block text-sm font-medium leading-6 text-gray-900">Username</div>
          <div className="mt-2">
            <input
              {...register('username')}
              id="username"
              placeholder="Enter your username"
              className={cn(
                'block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                {
                  'ring-red-600 focus:ring-red-600 placeholder:text-red-600 focus-visible:outline-red-600':
                    errors.username,
                }
              )}
            />
          </div>
        </label>
        {errors.username?.message && (
          <div className="my-2 text-xs italic text-red-500">{errors.username?.message}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">
          <div className="block text-sm font-medium leading-6 text-gray-900">Password</div>
          <div className="mt-2">
            <input
              {...register('password')}
              id="password"
              type="password"
              placeholder="Enter your password"
              className={cn(
                'block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
                {
                  'ring-red-600 focus:ring-red-600 placeholder:text-red-600 focus-visible:outline-red-600':
                    errors.password,
                }
              )}
            />
          </div>
        </label>
        {errors.password?.message && (
          <div className="my-2 text-xs italic text-red-500">{errors.password?.message}</div>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};
