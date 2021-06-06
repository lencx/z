import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface LabelProps {
  color: string;
  name: string;
  className?: string;
}

const Label: FC<LabelProps> = ({ className, name, color }) => {
  return (
    <a
      style={{ background: `#${color}` }}
      className={clsx('fzj-label', className)}
      href={`https://github.com/lencx/fzj/discussions?discussions_q=label%3A${name}`}
    >
      <span>{name}</span>
    </a>
  );
};

export default Label;
