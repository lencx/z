import React from 'react';

import GitHub from '@comps/GitHub';

import './index.scss';

export default function Head() {
  return (
    <div className="fzj-head">
      <div>
        <div className="logo" />
        <div className="desc" />
      </div>
      <GitHub />
    </div>
  );
}
