import React, { useCallback, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

import { FZJ_LIST } from '@client/gql';
import Avatar from '@comps/Avatar';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Label from '@comps/Label';
import { scrollLoad } from '@utils/tools';
import { useFzjList } from '@/models/fzj';
import {
  paginationLimit,
  emojiMap,
  categoriesUrl,
  discussionsNo,
} from '@utils/constant';

import './index.scss';

export default function HomeView() {
  const history = useHistory();
  const [listData, setListData] = useFzjList();
  const [pagination, setPagination] = useState<any>({});
  const [getData, { loading, error, data }] = useLazyQuery<any>(FZJ_LIST, {
    variables: { first: paginationLimit, cursor: null },
  });

  const _scrollLoad = useCallback(
    debounce(() => {
      scrollLoad(() => {
        pagination.hasNextPage &&
          getData({ variables: { cursor: pagination.cursor } });
      });
    }, 500),
    [pagination.cursor]
  );

  useEffect(() => {
    window.addEventListener('scroll', _scrollLoad, false);
    return () => {
      window.removeEventListener('scroll', _scrollLoad, false);
    };
  }, [pagination.cursor]);

  useEffect(() => {
    !listData.length && getData();
  }, []);

  useEffect(() => {
    if (data) {
      const { endCursor, hasNextPage } = data.repository.discussions.pageInfo;
      setPagination({ cursor: endCursor, hasNextPage });
      setListData([...listData, ...(data.repository.discussions.edges || [])]);
    }
  }, [data]);

  const handleGo = (url: string) => {
    window.open(url);
  };

  const handleIssues = (num: number) => {
    history.push(`/issues/${num}`);
  };

  if (error) return <Error />;

  return (
    <div className="home-view view">
      <div className="fzj-list-box">
        <div className="fzj-list">
          {listData.map(({ node, cursor }: any) => {
            const { category, author, number: issues, labels } = node;

            return (
              <div
                key={cursor}
                className="fzj-item"
                onClick={() => handleIssues(issues)}
              >
                <div className="title">
                  <em
                    className="issues"
                    onClick={() => handleGo(discussionsNo(issues))}
                  >
                    #{issues}
                  </em>
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
                    onClick={() => handleGo(author.url)}
                  />
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
                {/* <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} /> */}
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
