import Link from 'next/link';

import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

const DashboardLayout = (props: { children: React.ReactNode }) => {
  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link href="/" className="border-none text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="border-none text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Profile
            </Link>
          </li>
        </>
      }
      rightNav={
        <div>
          <li>
            <LogOutButton />
          </li>
        </div>
      }
    >
      {props.children}
    </BaseTemplate>
  );
};

export default DashboardLayout;
