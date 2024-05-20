import Link from 'next/link';

import { BaseTemplate } from '@/templates/BaseTemplate';

const Layout = (props: { children: React.ReactNode }) => {
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
            <Link href="/about/" className="border-none text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio/" className="border-none text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/dashboard/" className="border-none text-gray-700 hover:text-gray-900">
              Protected(Auth)
            </Link>
          </li>
        </>
      }
      rightNav={
        <div>
          <li>
            <Link href="/signin/" className="border-none text-gray-700 hover:text-gray-900">
              SignIn
            </Link>
          </li>
        </div>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
};

export default Layout;
