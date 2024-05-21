import ActiveLink from '@/components/Common/ActiveLink';
import { BaseTemplate } from '@/templates/BaseTemplate';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <ActiveLink
              href="/"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </ActiveLink>
          </li>

          <li>
            <ActiveLink
              href="/about"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/portfolio"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              Portfolio
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/dashboard"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              Protected(Auth)
            </ActiveLink>
          </li>
        </>
      }
      rightNav={
        <div>
          <li>
            <ActiveLink
              href="/signin"
              activeClassName="text-blue-400 border-b-2 border-blue-400 hover:text-blue-400"
              className="text-gray-700 hover:text-gray-900"
            >
              SignIn
            </ActiveLink>
          </li>
        </div>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
};

export default Layout;
