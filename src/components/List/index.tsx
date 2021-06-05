import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { FZJ_LIST } from '@client/gql';
import Avatar from '@comps/Avatar';
import Spin from '@comps/Spin';
import { scrollLoad } from '@utils/tools';
import {
  paginationLimit,
  emojiMap,
  categoriesUrl,
  discussionsNo,
} from '@utils/constant';

import errorIcon from './error.svg';

import './index.scss';

type PaginationOptions = {
  first: number;
  cursor: string | null;
};

export default function List() {
  const [listData, setListData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<PaginationOptions>({
    first: paginationLimit,
    cursor: null,
  });
  const { loading, error, data } = useQuery(FZJ_LIST, {
    variables: pagination,
  });

  useEffect(() => {
    if (loading || error) return;
    const { endCursor, hasNextPage } = data.repository.discussions.pageInfo;
    setListData([...listData, ...(data.repository.discussions.edges || [])]);
    const _scrollLoad = () =>
      hasNextPage &&
      scrollLoad(() => {
        setPagination({
          first: paginationLimit,
          cursor: endCursor,
        });
      });
    window.addEventListener('scroll', _scrollLoad);
    return () => {
      window.removeEventListener('scroll', _scrollLoad);
    };
  }, [data]);

  if (error) {
    return (
      <div className="loading-box">
        <img className="error-icon" src={errorIcon} alt="Error :(" />
      </div>
    );
  }

  const handleGo = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <div className="fzj-list-box">
        <div className="fzj-list">
          {listData.map(({ node, cursor }: any) => {
            const { category, author, number: disNumber } = node;
            return (
              <div className="fzj-item" key={cursor}>
                <div className="title">{node.title}</div>
                <div className="info">
                  <span
                    className="category"
                    onClick={() => handleGo(categoriesUrl(category.name))}
                  >
                    {emojiMap[category.emoji]} {category.name}
                  </span>
                  <Avatar
                    avatar={author.avatarUrl}
                    name={author.login}
                    url={author.url}
                  />
                  <span
                    className="discussionsNo"
                    onClick={() => handleGo(discussionsNo(disNumber))}
                  >
                    #{disNumber}
                  </span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />
              </div>
            );
          })}

          {loading && listData.length > 0 && (
            <p className="data-loading">Loading...</p>
          )}
        </div>
      </div>
      {loading && listData.length === 0 && (
        <div className="loading-box">
          <Spin key="spin" />
        </div>
      )}
    </>
  );
}
