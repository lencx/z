import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// ------------- List -------------
export const fzjList = atom({
  key: 'FZJ_LIST',
  default: [],
});

export const useFzjList = () => {
  return useRecoilState<any>(fzjList);
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

export const useFzjItem = () => {
  return useRecoilState<any>(fzjItem);
};

export const useGetFzjItem = () => {
  return useRecoilValue(fzjItemValue);
};
