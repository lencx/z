import React, { FC, createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { slide as Menu } from 'react-burger-menu';

import menuIcon from './menu.svg';
import './index.scss';

// make a new context
const MenuContext = createContext<any>({});

// create the provider
export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState: any) =>
          setMenuOpenState(newState.isOpen),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// create a button that calls a context function to set a new open state when clicked
export const MenuButton = () => {
  const ctx = useContext(MenuContext);
  return <img className="menu-btn" src={menuIcon} onClick={ctx.toggleMenu} />;
};

interface NavigationProps {
  options: Array<{
    name: string;
    path: string;
  }>;
}

// create a navigation component that wraps the burger menu
export const Navigation: FC<NavigationProps> = ({ options }) => {
  const history = useHistory();
  const ctx = useContext(MenuContext);

  const handleLink = (url: string) => {
    history.push(url);
    ctx.toggleMenu();
  };

  return (
    <Menu
      right
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
      {options.map((i) => {
        return (
          <span key={i.path} onClick={() => handleLink(i.path)}>
            {i.name}
          </span>
        );
      })}
    </Menu>
  );
};
