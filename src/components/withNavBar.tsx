'use client';

import { useTheme } from 'next-themes';
import type { FC } from 'react';

import NavBar from '@/components/Containers/NavBar';
import { useSiteNavigation } from '@/hooks';

const WithNavBar: FC = () => {
  const { navigationItems } = useSiteNavigation();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleCurrentTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <div>
      <NavBar
        onThemeTogglerClick={toggleCurrentTheme}
        navItems={navigationItems.map(([, { label, link, target }]) => ({
          link,
          text: label,
          target,
        }))}
      />
    </div>
  );
};

export default WithNavBar;
