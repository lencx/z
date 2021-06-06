import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface AvatarProps {
  avatar: string;
  name: string;
  url: string;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ className, avatar, name, url }) => {
  return (
    <a className={clsx('fzj-avatar', className)} href={url}>
      <img src={avatar} />
      <span>{name}</span>
    </a>
  );
};

export default Avatar;
