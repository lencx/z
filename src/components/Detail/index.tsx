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

  return <div className="detail"></div>;
}
