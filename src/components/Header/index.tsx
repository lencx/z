import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// import GitHub from '@comps/GitHub';
import { MenuProvider, MenuButton, Navigation } from '@comps/Menu';

import './index.scss';

interface HeaderProps {
  menuList: Array<{
    name: string;
    path: string;
  }>;
}

const Header: FC<HeaderProps> = ({ menuList }) => {
  const history = useHistory();

  return (
    <MenuProvider>
      <div className="fzj-header">
        <div className="logo-box" onClick={() => history.push('/')}>
          <div className="logo" />
          {/* <div className="desc" /> */}
        </div>
      </div>
      <div className="menu">
        <MenuButton />
        <Navigation options={menuList} />
      </div>
    </MenuProvider>
  );
};

export default Header;
