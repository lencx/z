import React, { FC } from 'react';

import { fmtDate } from '@utils/tools';

import './index.scss';

interface PostDateProps {
  date: Date;
  type?: 'create' | 'update';
}

const PostDate: FC<PostDateProps> = ({ type, date }) => {
  return (
    <div className="post-date">
      <b>{type === 'create' ? '📅' : '🔄'}</b>
      <span>{fmtDate(date)}</span>
    </div>
  );
};

PostDate.defaultProps = {
  type: 'create',
};

export default PostDate;
