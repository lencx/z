import slugify from '@sindresorhus/slugify';

export const emojiMap: { [key in string]: string } = {
  ':unicorn:': '🦄',
  ':question:': '❓',
  ':bulb:': '💡',
  ':crab:': '🦀',
  ':vs:': '🆚',
  ':computer:': '💻',
  ':speech_balloon:': '💬',
  ':desktop_computer:': '🖥️',
  ':hammer_and_wrench:': '🛠️',
};

export const paginationLimit = 5;

export const categoriesUrl = (categories: string) =>
  `https://github.com/lencx/fzj/discussions/categories/${slugify(categories)}`;

export const discussionsNo = (num: number) =>
  `https://github.com/lencx/fzj/discussions/${num}`;
