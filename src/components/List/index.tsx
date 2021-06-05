import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { FZJ_LIST } from '@client/gql';
import { paginationLimit, emojiMap } from '@utils/constant';

import './index.scss';

type PaginationOptions = {
  first: number | null;
  last: number | null;
  prevCursor: string | null;
  nextCursor: string | null;
};

export default function List() {
  const [pagination, setPagination] = useState<PaginationOptions>({
    first: paginationLimit,
    last: null,
    prevCursor: null,
    nextCursor: null,
  });
  const { loading, error, data } = useQuery(FZJ_LIST, {
    variables: pagination,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const list = data.repository.discussions.edges;
  const { startCursor, endCursor, hasPreviousPage, hasNextPage } =
    data.repository.discussions.pageInfo;

  const handlePrev = () => {
    setPagination({
      first: null,
      nextCursor: null,
      last: paginationLimit,
      prevCursor: startCursor,
    });
  };
  const handleNext = () => {
    setPagination({
      last: null,
      prevCursor: null,
      first: paginationLimit,
      nextCursor: endCursor,
    });
  };

  return (
    <div className="fzj-list">
      {list.map(({ node, cursor }: any) => {
        const { category } = node;
        return (
          <div className="fzj-item" key={cursor}>
            <span className="category">
              {emojiMap[category.emoji]} {category.name}
            </span>
            <span className="title">{node.title}</span>

            <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />
          </div>
        );
      })}
      {hasPreviousPage && <button onClick={handlePrev}>prev</button>}
      {hasNextPage && <button onClick={handleNext}>next</button>}
    </div>
  );
}
