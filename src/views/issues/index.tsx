import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { FZJ_ITEM } from '@client/gql';
import Comment from '@comps/Comment';
import Loading from '@comps/Loading';
import Error from '@comps/Error';

import './index.scss';

export default function IssuesView() {
  const { number } = useParams<any>();

  const { loading, error, data } = useQuery(FZJ_ITEM, {
    variables: { number: parseInt(number) },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { title, bodyHTML, comments } = data.repository.discussion;

  return (
    <div className="issues-view view">
      <div className="post">
        <h1 className="title">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />

        {comments.edges.map(({ node }: any) => {
          return <Comment key={node.id} data={node} />;
        })}
      </div>
    </div>
  );
}
