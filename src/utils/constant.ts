import slugify from '@sindresorhus/slugify';

export const emojiMap: { [key in string]: string } = {
  ':black_large_square:': '⬛',
  ':bulb:': '💡',
  ':computer:': '💻',
  ':crystal_ball:': '🔮',
  ':crab:': '🦀',
  ':desktop_computer:': '🖥️',
  ':hammer_and_wrench:': '🛠️',
  ':memo:': '📝',
  ':question:': '❓',
  ':speech_balloon:': '💬',
  ':unicorn:': '🦄',
  ':vs:': '🆚',
};

export const paginationLimit = 8;

export const categoriesUrl = (categories: string) =>
  `https://github.com/lencx/fzj/discussions/categories/${slugify(categories)}`;

export const discussionsNo = (num: number) =>
  `https://github.com/lencx/fzj/discussions/${num}`;
