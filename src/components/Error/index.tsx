import React, { FC } from 'react';

import errorIcon from './error.svg';
import './index.scss';

interface ErrorProps {
  visible?: boolean;
}

const Error: FC<ErrorProps> = ({ visible }) => {
  return visible ? (
    <div className="error-box">
      <div>
        <img className="error-icon" src={errorIcon} alt="Error :(" />
        <p>
          温馨提示：因 GitHub API 请求次数限制，如果无法访问，请点击右上角的
          GitHub 访问
        </p>
      </div>
    </div>
  ) : null;
};

Error.defaultProps = {
  visible: true,
};

export default Error;
