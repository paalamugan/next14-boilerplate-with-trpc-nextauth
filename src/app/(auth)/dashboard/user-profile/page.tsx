import Link from '@/components/Link';

import { ClientFetch } from './ClientFetch';
import { ServerFetch } from './ServerFetch';

export async function generateMetadata() {
  return {
    title: 'User Profile',
  };
}

const UserProfilePage = () => {
  return (
    <div className="my-6">
      <h1 className="mb-4 text-2xl">User Data</h1>
      <div className="flex flex-col gap-4">
        <ClientFetch />
        <ServerFetch />
      </div>
      <p className="mt-4">
        <Link href="/dashboard" className="text-blue-500 underline">
          Go to Dashboard
        </Link>
      </p>
    </div>
  );
};

export default UserProfilePage;
