import React from 'react';

import { useFzjTags } from '@models/fzj';
import Loading from '@comps/Loading';
import Category from '@comps/Category';
import Label from '@comps/Label';
import Error from '@comps/Error';

import './index.scss';

export default function TagsView() {
  const { data, loading, error } = useFzjTags();

  if (error) return <Error type="blog" />;
  if (loading || !data.repository) return <Loading />;

  const { discussionCategories, labels } = data.repository;

  return (
    <div className="tags-view">
      <h2>Categories & Labels</h2>
      <div className="tag-categories">
        {discussionCategories.edges.map(({ node }: any) => {
          return (
            <Category key={node.id} name={node.name} emoji={node.emojiHTML} />
          );
        })}
      </div>
      <div className="tag-labels">
        {labels.edges.map(({ node }: any) => {
          return <Label key={node.id} name={node.name} color={node.color} />;
        })}
      </div>
    </div>
  );
}
