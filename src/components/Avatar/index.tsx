import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface AvatarProps {
  avatar: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({ className, avatar, name, onClick }) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <div className={clsx('fzj-avatar', className)} onClick={handleClick}>
      <img src={avatar} />
      <span>{name}</span>
    </div>
  );
};

export default Avatar;
