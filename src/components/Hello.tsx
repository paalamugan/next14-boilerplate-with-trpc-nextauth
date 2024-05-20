import { getAuthSession } from '@/server/auth';

import { HelloClient } from './HelloClient';

const Hello = async () => {
  const session = await getAuthSession();

  return (
    <>
      <p>👋 Hello {session?.user.username || ''}</p>
      <pre>
        <HelloClient />
      </pre>
    </>
  );
};

export { Hello };
