import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface SpinProps {
  className?: string;
}

const Spin: FC<SpinProps> = ({ className }) => {
  return (
    <svg
      className={clsx('spinner', className)}
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
};

export default Spin;
