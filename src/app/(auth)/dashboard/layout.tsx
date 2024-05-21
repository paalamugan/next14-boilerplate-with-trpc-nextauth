import ActiveLink from '@/components/Common/ActiveLink';
import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

const DashboardLayout = (props: { children: React.ReactNode }) => {
  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <ActiveLink
              href="/"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/dashboard"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/dashboard/user-profile"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              Profile
            </ActiveLink>
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
