import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

import Avatar from '@comps/Avatar';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Category from '@comps/Category';
import Label from '@comps/Label';
import { useFzjList } from '@/models/fzj';
import { scrollLoad, handleGo } from '@utils/tools';
import { discussionsNo } from '@utils/constant';

import './index.scss';

export default function HomeView() {
  const history = useHistory();
  const [a, b] = useFzjList();
  const [listData, setListData] = a;
  const [getData, { loading, error, data }] = b;

  const _scrollLoad = useCallback(
    debounce(
      () => {
        scrollLoad(() => {
          listData.pageInfo.hasNextPage &&
            getData({ variables: { cursor: listData.pageInfo.cursor } });
        });
      },
      500,
      { leading: true }
    ),
    [listData.pageInfo]
  );

  useEffect(() => {
    window.addEventListener('scroll', _scrollLoad, false);
    return () => {
      window.removeEventListener('scroll', _scrollLoad, false);
    };
  }, [listData.pageInfo]);

  useEffect(() => {
    !listData.list.length && getData();
  }, []);

  useEffect(() => {
    if (data) {
      const { endCursor, hasNextPage } = data.repository.discussions.pageInfo;
      setListData({
        pageInfo: { cursor: endCursor, hasNextPage },
        list: [...listData.list, ...(data.repository.discussions.edges || [])],
      });
    }
  }, [data]);

  const handleIssues = (e: any, num: number) => {
    e.stopPropagation();
    history.push(`/issues/${num}`);
  };

  if (error) return <Error type="home" />;

  const _list = listData.list;

  return (
    <div className="home-view">
      <div className="fzj-list-box">
        <div className="fzj-list">
          {_list.map(({ node, cursor }: any) => {
            const { category, author, number: issues, labels } = node;

            return (
              <div key={cursor} className="fzj-item">
                <div
                  className="fzj-card"
                  onClick={(e) => handleIssues(e, issues)}
                >
                  <em
                    className="issues"
                    onClick={(e) => handleGo(discussionsNo(issues), e)}
                  >
                    #{issues}
                  </em>
                  <div className="title">
                    <span>{node.title}</span>
                  </div>
                  <div className="info">
                    <Category name={category.name} emoji={category.emojiHTML} />
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
              </div>
            );
          })}
        </div>
      </div>
      {loading && _list.length > 0 && (
        <div className="data-loading">Loading...</div>
      )}
      <Loading visible={loading && _list.length === 0} />
    </div>
  );
}
