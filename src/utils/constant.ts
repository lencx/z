import slugify from '@sindresorhus/slugify';

export const emojiMap: { [key in string]: [string, string] } = {
  THUMBS_UP: ['👍', ':+1:'],
  THUMBS_DOWN: ['👎', ':-1:'],
  LAUGH: ['😄', ':laugh:'],
  HOORAY: ['🎉', ':hooray:'],
  CONFUSED: ['😕', ':confused:'],
  HEART: ['❤️', ':heart:'],
  ROCKET: ['🚀', ':rocket:'],
  EYES: ['👀', ':eyes:'],
};

export const paginationLimit = 8;

export const categoriesUrl = (categories: string) =>
  `https://github.com/lencx/z/discussions/categories/${slugify(categories)}`;

export const discussionsNo = (num: number) =>
  `https://github.com/lencx/z/discussions/${num}`;
