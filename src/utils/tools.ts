import { emojiMap } from './constant';

export function scrollLoad(callback: () => void) {
  // 文档内容实际高度（包括超出视窗的溢出部分）
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  // 滚动条滚动距离
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  // 窗口可视范围高度
  const clientHeight =
    window.innerHeight ||
    Math.min(document.documentElement.clientHeight, document.body.clientHeight);

  if (clientHeight + scrollTop >= scrollHeight) {
    // console.log('=== 加载更多内容…… ===');
    callback();
  }
}

export function handleGo(url: string) {
  window.open(url);
}

export function reactionsCount(
  reactions: Array<{ node: { id: string; content: string } }>
) {
  const _map = new Map();
  reactions.forEach(({ node }) => {
    const key = emojiMap[node.content][0];
    if (!_map.has(key)) {
      _map.set(key, 1);
    } else {
      const val = _map.get(key);
      _map.set(key, val + 1);
    }
  });
  return Array.from(_map);
}
