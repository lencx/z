import { useEffect } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { useLazyQuery } from '@apollo/client';

import { FZJ_LIST, FZJ_ITEM, FZJ_TAGS } from '@client/gql';
import { paginationLimit } from '@utils/constant';

// ------------- List -------------
export const fzjList = atom({
  key: 'FZJ_LIST',
  default: {
    pageInfo: {},
    list: [],
  },
});

export const useFzjList = () => {
  const a = useRecoilState<any>(fzjList);
  const b = useLazyQuery<any>(FZJ_LIST, {
    variables: { first: paginationLimit, cursor: null },
  });
  return [a, b] as any;
};

// ------------- Item -------------
export const fzjItem = atom({
  key: 'FZJ_ITEM',
  default: new Map(),
});

const fzjItemValue = selector({
  key: 'FZJ_ITEM_VALUE',
  get: ({ get }) => {
    const _map = get(fzjItem);
    return _map;
  },
});

export const useFzjItem = (issues: string) => {
  const [state, setState] = useRecoilState<any>(fzjItem);
  const query = useLazyQuery(FZJ_ITEM, {
    variables: { number: parseInt(issues) },
  });
  useEffect(() => {
    if (query[1].data) {
      setState(state.set(issues, query[1].data));
    }
  }, [query[1].data]);
  return query;
};

export const useGetFzjItem = () => {
  return useRecoilValue(fzjItemValue);
};

// ------------- TGAS -------------
export const fzjTags = atom({
  key: 'FZJ_TAGS',
  default: {},
});

const fzjTagsValue = selector({
  key: 'FZJ_TAGS_VALUE',
  get: ({ get }) => {
    const data = get(fzjTags);
    return data;
  },
});

export const useFzjTags = () => {
  const [state, setState] = useRecoilState<any>(fzjTags);
  const record = useRecoilValue(fzjTagsValue);
  const [getData, { data, ...rest }] = useLazyQuery(FZJ_TAGS);

  useEffect(() => {
    if (!Object.keys(record).length) {
      getData();
    } else {
      setState(record);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  return { data: state, ...rest };
};
