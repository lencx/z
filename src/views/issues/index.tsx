import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { FZJ_ITEM } from '@client/gql';
import Comment from '@comps/Comment';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import { useFzjItem, useGetFzjItem } from '@/models/fzj';

import './index.scss';

export default function IssuesView() {
  const { issues } = useParams<any>();
  const [item, setItem] = useFzjItem();
  const itemMap = useGetFzjItem();

  const [getData, { loading, error, data }] = useLazyQuery(FZJ_ITEM, {
    variables: { number: parseInt(issues) },
  });

  useEffect(() => {
    if (!itemMap.has(issues)) getData();
  }, []);

  useEffect(() => {
    if (data) {
      setItem(item.set(issues, data));
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const _data = data || itemMap.get(issues);
  if (!_data) return null;
  const { title, bodyHTML, comments } = _data.repository.discussion;

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
