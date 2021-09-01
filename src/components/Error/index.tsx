import React, { FC } from 'react';

import errorIcon from './error.svg';
import './index.scss';

interface ErrorProps {
  type: 'home' | 'issues';
  visible?: boolean;
  issues?: string;
}

const BASE_URL = 'https://github.com/lencx/z/discussions';

const Error: FC<ErrorProps> = ({ visible, issues, type }) => {
  const data = {
    home: ['lencx/z', `${BASE_URL}`],
    issues: [`lencx/z #${issues}`, `${BASE_URL}/${issues}`],
  }[type];

  return visible ? (
    <div className="error-box">
      <div>
        <img className="error-icon" src={errorIcon} alt="Error :(" />
        <p>
          <b>温馨提示</b>
        </p>
        <p>因 GitHub API 请求次数限制，暂时无法访问，点击此处可以查看原链接</p>
        <p>
          <a href={data[1]}>{data[0]}</a>
        </p>
      </div>
    </div>
  ) : null;
};

Error.defaultProps = {
  visible: true,
  type: 'home',
};

export default Error;
