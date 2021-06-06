import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { FZJ_LIST } from '@client/gql';
import Avatar from '@comps/Avatar';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Label from '@comps/Label';
import { scrollLoad } from '@utils/tools';
import {
  paginationLimit,
  emojiMap,
  categoriesUrl,
  discussionsNo,
} from '@utils/constant';

import './index.scss';

type PaginationOptions = {
  first: number;
  cursor: string | null;
};

export default function HomeView() {
  const history = useHistory();
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

  const handleGo = (url: string) => {
    window.open(url);
  };

  const handleIssues = (num: string) => {
    history.push(`/issues/${num}`);
  };

  if (error) return <Error />;

  return (
    <div className="home-view view">
      <div className="fzj-list-box">
        <div className="fzj-list">
          {listData.map(({ node, cursor }: any) => {
            const { category, author, number: disNumber, labels } = node;

            return (
              <div key={cursor} className="fzj-item">
                <div className="title" onClick={() => handleIssues(disNumber)}>
                  <span>{node.title}</span>
                </div>
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
                  <div className="labels">
                    {labels.edges.map(({ node: labelNode }: any) => {
                      return (
                        <Label
                          key={labelNode.id}
                          name={labelNode.name}
                          color={labelNode.color}
                        />
                      );
                    })}
                  </div>
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
      <Loading visible={loading && listData.length === 0} />
    </div>
  );
}
