import React, { FC } from 'react';

import Avatar from '@comps/Avatar';
import { handleGo } from '@utils/tools';

import './index.scss';

interface CommentProps {
  data: any;
}

const Replies: FC<CommentProps> = ({ data }) => {
  return (
    <div className="comment-replies">
      {data.edges.map(({ node }: any, idx: number) => {
        return (
          <div key={+idx}>
            <Avatar
              className="comment-replies-author"
              avatar={node.author.avatarUrl}
              name={node.author.login}
              onClick={() => handleGo(node.author.url)}
            />
            <div
              className="comment-replies-body"
              dangerouslySetInnerHTML={{ __html: node.bodyHTML }}
            />
          </div>
        );
      })}
    </div>
  );
};

const Comment: FC<CommentProps> = ({ data }) => {
  const { author, replies } = data;

  return (
    <div className="comment-item" key={data.id}>
      <Avatar
        className="comment-author"
        avatar={author.avatarUrl}
        name={author.login}
        onClick={() => handleGo(author.url)}
      />
      <div className="comment-body">
        <div
          className="comment-main"
          dangerouslySetInnerHTML={{ __html: data.bodyHTML }}
        />
        <Replies data={replies} />
      </div>
    </div>
  );
};

export default Comment;
