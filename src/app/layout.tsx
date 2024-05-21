import '@/styles/globals.css';

import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import type { FC, PropsWithChildren } from 'react';

import { AppConfig } from '@/constants/appConfig';
import BaseLayout from '@/layouts/Base';
import { cn } from '@/lib/cn';
import { INTER, OPEN_SANS } from '@/lib/next-fonts';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { TRPCReactProvider } from '@/trpc/client';

const fontClasses = cn(OPEN_SANS.variable, INTER.variable);

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <TRPCReactProvider>
          <ThemeProvider>
            <NextTopLoader height={5} />
            <BaseLayout>{children}</BaseLayout>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// export const runtime = 'edge';
