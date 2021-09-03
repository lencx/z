import React from 'react';

import './index.scss';

export default function AboutView() {
  return (
    <div className="about-view">
      <img
        className="pic"
        src="https://user-images.githubusercontent.com/16164244/119298318-607bbf80-bc8f-11eb-98da-e8277efe3249.png"
      />
      <div className="fzj-desc lencx">
        <p className="notes">{`lencx {折腾 ⇌ 迷茫 ⇌ 思考]ing，在路上...`}</p>
        <p>
          生命在于折腾，折腾多了，必然迷茫，迷茫了，就停下来思考，想通了就重新上路。
        </p>
        <p>
          在路上会禁不住“诱惑”而去折腾，折腾了，又迷茫，迷茫了，又思考，一直在路上。
        </p>
        <p>循环往复，生生不息...</p>
      </div>
      {/* <h3>关于网站</h3> */}
      <div className="fzj-desc">
        项目 <a href="https://github.com/lencx/z/discussions">Z</a>{' '}
        字母由来：取首字母 FZJ，因过于繁琐，故取其中间字母 Z，Z
        是一个很有意思的字母，像弹簧，蓄力愈久，反弹的力量就愈大。很符合
        «浮之静» 之本意。
      </div>
    </div>
  );
}
