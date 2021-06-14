import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface ReactionProps {
  emoji: string;
  count: number;
  className?: string;
}

const Reaction: FC<ReactionProps> = ({ className, emoji, count }) => {
  return (
    <span className={clsx('fzj-reaction', className)}>
      <span className="emoji">{emoji}</span>
      <span className="count">{count}</span>
    </span>
  );
};

export default Reaction;
