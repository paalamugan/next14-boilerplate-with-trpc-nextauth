import CenteredLayout from '@/layouts/Centered';

const Layout = async (props: { children: React.ReactNode }) => {
  return <CenteredLayout>{props.children}</CenteredLayout>;
};

export default Layout;
