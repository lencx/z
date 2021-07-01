import React, { FC } from 'react';
import clsx from 'clsx';

import { handleGo } from '@/utils/tools';
import './index.scss';

interface LabelProps {
  color: string;
  name: string;
  className?: string;
}

const Label: FC<LabelProps> = ({ className, name, color }) => {
  const url = `https://github.com/lencx/z/discussions?discussions_q=label%3A${name}`;

  const handleClick = (e: any) => {
    e.stopPropagation();
    handleGo(url);
  };

  return (
    <span
      style={{ background: `#${color}` }}
      className={clsx('fzj-label', className)}
      onClick={handleClick}
    >
      <span>{name}</span>
    </span>
  );
};

export default Label;
