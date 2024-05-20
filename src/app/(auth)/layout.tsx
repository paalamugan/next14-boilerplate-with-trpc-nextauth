import { AuthGuard } from '@/components/AuthGuard';
import { SessionProvider } from '@/providers/SessionProvider';
import { getAuthSession } from '@/server/auth';

type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await getAuthSession();

  return (
    <SessionProvider session={session}>
      <AuthGuard>{children}</AuthGuard>
    </SessionProvider>
  );
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default AuthLayout;
