import React from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from '@comps/Avatar';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Category from '@comps/Category';
import Label from '@comps/Label';
import { useFzjList } from '@/models/fzj';
import { handleGo } from '@utils/tools';
import { discussionsNo } from '@utils/constant';

import './index.scss';

export default function BlogView() {
  const history = useHistory();
  const { data, loading, error } = useFzjList();

  const handleIssues = (e: any, num: number) => {
    e.stopPropagation();
    history.push(`/issues/${num}`);
  };

  if (error) return <Error type="blog" />;

  return (
    <div className="blog-view">
      <div className="fzj-list-box">
        <div className="fzj-list">
          {data.map(({ node, cursor }: any) => {
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
      {loading && data.length > 0 && (
        <div className="data-loading">Loading...</div>
      )}
      <Loading visible={loading && data.length === 0} />
    </div>
  );
}
