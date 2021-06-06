import React from 'react';
import { useHistory } from 'react-router-dom';

import GitHub from '@comps/GitHub';

import './index.scss';

export default function Header() {
  const history = useHistory();

  return (
    <div className="fzj-header">
      <div className="logo-box" onClick={() => history.push('/')}>
        <div className="logo" />
        <div className="desc" />
      </div>
      <GitHub />
    </div>
  );
}
