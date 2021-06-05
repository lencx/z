import React, { FC } from 'react';

import './index.scss';

interface AvatarProps {
  avatar: string;
  name: string;
}

const Avatar: FC<AvatarProps> = ({ avatar, name }) => {
  return (
    <div className="fzj-avatar">
      <img src={avatar} />
      <span>{name}</span>
    </div>
  );
};

export default Avatar;
