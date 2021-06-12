import React, { FC } from 'react';

import { handleGo } from '@utils/tools';
import { categoriesUrl } from '@utils/constant';

import './index.scss';

interface CategoryProps {
  name: string;
  emoji: string;
  className?: string;
}

const Category: FC<CategoryProps> = ({ name, emoji }) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    handleGo(categoriesUrl(name));
  };

  return (
    <span className="fzj-category" onClick={handleClick}>
      <span className="fzj-emoji" dangerouslySetInnerHTML={{ __html: emoji }} />
      {name}
    </span>
  );
};

export default Category;
