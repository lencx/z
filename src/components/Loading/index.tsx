import React, { FC } from 'react';
import Spin from '@comps/Spin';

import './index.scss';

interface LoadingProps {
  visible?: boolean;
}

const Loading: FC<LoadingProps> = ({ visible }) => {
  return visible ? (
    <div className="loading-box">
      <Spin key="spin" />
    </div>
  ) : null;
};

Loading.defaultProps = {
  visible: true,
};

export default Loading;
