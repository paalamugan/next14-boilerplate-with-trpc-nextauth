'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Button from '@/components/Common/Button';
import CenteredLayout from '@/layouts/Centered';

const NotFoundPage = () => {
  return (
    <CenteredLayout>
      <main className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-semibold"> 404 </h1>
        <h1 className="special mt-4">Page could not be found</h1>
        <p className="mt-4 max-w-sm text-center text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button href="/">
          Back to Home
          <ArrowRightIcon />
        </Button>
      </main>
    </CenteredLayout>
  );
};

export default NotFoundPage;
