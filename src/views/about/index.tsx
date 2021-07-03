import React from 'react';

import './index.scss';

export default function AboutView() {
  return (
    <div className="about-view">
      <img
        className="pic"
        src="https://user-images.githubusercontent.com/16164244/119298318-607bbf80-bc8f-11eb-98da-e8277efe3249.png"
      />
      <p className="fzj-desc">
        网站 Z 字母由来：取首字母 FZJ，因过于繁琐，故取其中间字母 Z，Z
        是一个很有意思的字母，像弹簧，蓄力愈久，反弹的力量就愈大。很符合
        «浮之静» 之本意。
      </p>
    </div>
  );
}
