import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '@comps/Comment';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import { useFzjItem, useGetFzjItem } from '@/models/fzj';

import './index.scss';

export default function IssuesView() {
  const { issues } = useParams<any>();
  const [getData, { loading, error, data }] = useFzjItem(issues);
  const itemMap = useGetFzjItem();

  useEffect(() => {
    if (!itemMap.has(issues)) getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const _data = data || itemMap.get(issues);
  if (!_data) return null;
  const { title, bodyHTML, comments } = _data.repository.discussion;

  return (
    <div className="issues-view">
      <div className="post markdown-body">
        <h1 className="title">
          <span>{title}</span>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />

        {comments.edges.map(({ node }: any) => {
          return <Comment key={node.id} data={node} />;
        })}
      </div>
    </div>
  );
}
