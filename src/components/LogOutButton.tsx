'use client';

import { signOut } from 'next-auth/react';

const LogOutButton = () => {
  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={async () => {
        await signOut({
          callbackUrl: '/signin',
        });
      }}
    >
      Sign Out
    </button>
  );
};

export { LogOutButton };
