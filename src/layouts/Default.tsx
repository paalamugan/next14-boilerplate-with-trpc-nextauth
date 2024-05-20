import type { FC, PropsWithChildren } from 'react';

import WithNavBar from '@/components/withNavBar';
import WithSidebar from '@/components/withSidebar';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <WithNavBar />

    <WithSidebar navKeys={[]} />

    <main>{children}</main>
  </>
);

export default DefaultLayout;
