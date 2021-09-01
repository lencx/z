import { useEffect, useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { useLazyQuery } from '@apollo/client';

import { FZJ_LIST, FZJ_ITEM, FZJ_TAGS } from '@client/gql';
import { paginationLimit, BASE_JSON_URI } from '@utils/constant';
import { scrollLoad } from '@utils/tools';

// ------------- List -------------
export const fzjList = atom({
  key: 'FZJ_LIST',
  default: {
    pageInfo: {},
    list: [],
  },
});

export const useFzjList = () => {
  const [error, setError] = useState(null);
  const a = useRecoilState<any>(fzjList);
  const b = useLazyQuery<any>(FZJ_LIST, {
    variables: { first: paginationLimit, cursor: null },
  });

  const [listData, setListData] = a;
  const [getData, { loading, data, error: gqlError }] = b;

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
    (async () => {
      if (gqlError) {
        window.removeEventListener('scroll', _scrollLoad, false);
        try {
          const data = await fetch(`${BASE_JSON_URI}/discussions.json`).then(
            (res) => res.json()
          );
          setListData({ pageInfo: {}, list: data });
        } catch (e) {
          setError(e);
        }
      }
    })();
  }, [gqlError]);

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

  return { data: listData.list, loading, error };
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

export const useGetFzjItem = () => {
  return useRecoilValue(fzjItemValue);
};

export const useFzjItem = (issues: string) => {
  const [state, setState] = useRecoilState<any>(fzjItem);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [getData, opts]: any = useLazyQuery(FZJ_ITEM, {
    variables: { number: parseInt(issues) },
  });
  const itemMap = useGetFzjItem();

  useEffect(() => {
    if (!itemMap.has(issues)) {
      setLoading(true);
      getData();
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (opts.data) {
        setState(state.set(issues, opts?.data?.repository?.discussion));
      } else {
        try {
          const data = await fetch(
            `${BASE_JSON_URI}/issues/${issues}.json`
          ).then((res) => res.json());
          setState(state.set(issues, data));
        } catch (e) {
          setError(e);
        }
      }
      setLoading(false);
    })();
  }, [opts.data]);

  return { data: itemMap.get(issues), loading, error };
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
