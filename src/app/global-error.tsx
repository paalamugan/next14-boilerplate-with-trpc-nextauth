/* eslint-disable no-console */

'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { type FC, useEffect } from 'react';

import Button from '@/components/Common/Button';
import BaseLayout from '@/layouts/Base';
import CenteredLayout from '@/layouts/Centered';

type GlobalErrorPageProps = {
  error: Error & { digest?: string };
  params: { locale: string };
};
const GlobalErrorPage: FC<GlobalErrorPageProps> = ({ error, params }) => {
  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <html lang={params.locale}>
      <body>
        <BaseLayout>
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
        </BaseLayout>
      </body>
    </html>
  );
};

export default GlobalErrorPage;
