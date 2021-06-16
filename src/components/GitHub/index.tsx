import React from 'react';
import githubIcon from './github.svg';

import './index.scss';

export default function GitHub() {
  return (
    <a
      className="github-lencx-fzj"
      href="https://github.com/lencx/fzj/discussions"
    >
      <img src={githubIcon} />
    </a>
  );
}
