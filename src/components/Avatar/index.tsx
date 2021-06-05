import React, { FC } from 'react';

import './index.scss';

interface AvatarProps {
  avatar: string;
  name: string;
  url: string;
}

const Avatar: FC<AvatarProps> = ({ avatar, name, url }) => {
  return (
    <a className="fzj-avatar" href={url}>
      <img src={avatar} />
      <span>{name}</span>
    </a>
  );
};

export default Avatar;
