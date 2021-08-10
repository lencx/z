import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';

import Comment from '@comps/Comment';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Reaction from '@comps/Reaction';
import { useFzjItem, useGetFzjItem } from '@/models/fzj';
import { handleGo, reactionsCount } from '@utils/tools';
import { discussionsNo } from '@utils/constant';

import woapIcon from './icon/woap.svg';
import './index.scss';

export default function IssuesView() {
  const { issues } = useParams<any>();
  const [getData, { loading, error, data }] = useFzjItem(issues);
  const itemMap = useGetFzjItem();

  useEffect(() => {
    if (!itemMap.has(issues)) getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error type="issues" issues={issues} />;

  const _data = data || itemMap.get(issues);
  if (!_data) return null;
  const { title, bodyHTML, comments, reactions, category, labels } =
    _data.repository.discussion;

  const handleWoap = () => {
    window.open(
      `${window.location.origin}/posts/issues-${issues
        .toString()
        .padStart(4, '0')}`,
      '__blank'
    );
  };

  const isWoap = labels?.edges?.some(({ node }: any) =>
    ['wechat-link', 'wechat-post', '微信杂谈'].includes(node.name)
  );

  return (
    <div className={clsx('issues-view', category.name.toLocaleLowerCase())}>
      <Helmet>
        <title>浮之静｜{title}</title>
      </Helmet>
      <div className="post markdown-body">
        {isWoap && (
          <img
            className="woap"
            src={woapIcon}
            alt="woap"
            onClick={handleWoap}
          />
        )}
        <h1 className="title" onClick={() => handleGo(discussionsNo(issues))}>
          <span>
            <span className="issues">#{issues}</span>
            <span>{title}</span>
          </span>
        </h1>

        <div className="status">
          {reactionsCount(reactions.edges).map((i) => {
            return <Reaction key={i[0]} emoji={i[0]} count={i[1]} />;
          })}
        </div>

        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />

        {comments.edges.map(({ node }: any) => {
          return <Comment key={node.id} data={node} />;
        })}
      </div>
    </div>
  );
}
