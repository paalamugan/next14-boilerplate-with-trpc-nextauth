import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type NavigationKeys = 'home' | 'dashboard' | 'about';

export interface NavigationEntry {
  label?: string;
  link?: string;
  items?: Record<string, NavigationEntry>;
  target?: HTMLAttributeAnchorTarget | undefined;
}

export interface SiteNavigation {
  topNavigation: Record<NavigationKeys, NavigationEntry>;
  sideNavigation: Record<NavigationKeys, NavigationEntry>;
}

export type TranslationValue = string | number | boolean | Date | null | undefined;
export type RichTranslationValues = Record<
  string,
  TranslationValue | ((chunks: ReactNode) => ReactNode)
>;
