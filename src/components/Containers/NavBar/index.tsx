'use client';

import Hamburger from '@heroicons/react/24/solid/Bars3Icon';
import XMark from '@heroicons/react/24/solid/XMarkIcon';
import * as Label from '@radix-ui/react-label';
import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { useState } from 'react';

import ThemeToggle from '@/components/Common/ThemeToggle';
import NavItem from '@/components/Containers/NavBar/NavItem';
import Link from '@/components/Link';

import style from './index.module.css';

const navInteractionIcons = {
  show: <Hamburger className={style.navInteractionIcon} />,
  close: <XMark className={style.navInteractionIcon} />,
};

type NavbarProps = {
  navItems: Array<{
    text: string;
    link: string;
    target?: HTMLAttributeAnchorTarget | undefined;
  }>;
  onThemeTogglerClick: () => void;
};

const NavBar: FC<NavbarProps> = ({ navItems, onThemeTogglerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${style.container}`}>
      <div className={style.demoIconAndMobileItemsToggler}>
        <Link className={style.demoIconWrapper} href="/" aria-label="Home">
          My Logo
        </Link>

        <Label.Root
          onClick={() => setIsMenuOpen(prev => !prev)}
          className={style.sidebarItemTogglerLabel}
          htmlFor="sidebarItemToggler"
        >
          {navInteractionIcons[isMenuOpen ? 'close' : 'show']}
        </Label.Root>
      </div>

      <input className="peer hidden" id="sidebarItemToggler" type="checkbox" />

      <div className={`${style.main} peer-checked:flex`}>
        <div className={style.navItems}>
          {navItems.map(({ text, link, target }) => (
            <NavItem key={link} href={link} target={target}>
              {text}
            </NavItem>
          ))}
        </div>

        <div className={style.actionsWrapper}>
          <ThemeToggle onClick={onThemeTogglerClick} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
