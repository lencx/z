import React, { FC } from 'react';

import Avatar from '@comps/Avatar';
import { handleGo } from '@utils/tools';

import './index.scss';

interface CommentProps {
  data: any;
}

const Comment: FC<CommentProps> = ({ data }) => {
  const { author } = data;

  return (
    <div className="comment-item" key={data.id}>
      <Avatar
        className="comment-author"
        avatar={author.avatarUrl}
        name={author.login}
        onClick={() => handleGo(author.url)}
      />
      <div
        className="comment-body"
        dangerouslySetInnerHTML={{ __html: data.bodyHTML }}
      />
    </div>
  );
};

export default Comment;
