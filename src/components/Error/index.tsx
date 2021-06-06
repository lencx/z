import React, { FC } from 'react';

import errorIcon from './error.svg';
import './index.scss';

interface ErrorProps {
  visible?: boolean;
}

const Error: FC<ErrorProps> = ({ visible }) => {
  return visible ? (
    <div className="error-box">
      <img className="error-icon" src={errorIcon} alt="Error :(" />
    </div>
  ) : null;
};

Error.defaultProps = {
  visible: true,
};

export default Error;
