/* eslint-disable no-console */

'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { FC } from 'react';

import Button from '@/components/Common/Button';
import CenteredLayout from '@/layouts/Centered';

const ErrorPage: FC<{ error: Error }> = ({ error }) => {
  console.log('error', error);

  return (
    <CenteredLayout>
      <main className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-semibold"> 500 </h1>
        <h1 className="special mt-3">Internal Server Error</h1>
        <p className="mt-3 max-w-sm text-center text-lg">
          This page is currently unavailable. Please try again later.
        </p>
        <Button href="/">
          Back to Home
          <ArrowRightIcon />
        </Button>
      </main>
    </CenteredLayout>
  );
};

export default ErrorPage;
