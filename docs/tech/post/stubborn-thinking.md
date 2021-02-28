# 人总是喜欢在固有思维下钻牛角尖

> 最近写了一个基于`vite`的`wasm-pack`(`Rust -> Wasm`)插件，遇到一个比较有意思的问题。

## 需求

实现一个`rsw插件`，当vite服务启动后，插件会自动调用`wasm-pack`的cli，进行build，生成wasm(webAssembly的简称)的npm包，当rust包目录下的文件变更时，能够进行重新进行build(热更新)。

## 问题

实现需求其实很简单，但是如果只是这样实现插件，虽然能用，但是体验不好。每次启动服务都会先执行cli的build(耗时有点长)，vite的快速启动开发环境的体验全无。其实不分析也知道，cli的build并非每次启动都需要执行。如果已经build过，则不需要再次执行。

于是，就有了第一版简单粗暴的实现方案，直接看目录中有没有build的文件存在，如果文件存在，则直接跳过执行，否则，执行build。短短几行代码似乎就解决了问题。

```js
// 核心代码：如果`package.json`存在则跳过执行
// https://github.com/lencx/vite-plugin-rsw/blob/69668e9bdb8322382e5d49d3e85b67a35354d7e0/src/compiler.ts#L82-L88
const pkgPath = path.resolve(root, getCrateName(_crate), 'pkg');
// vite startup optimization
try {
  fs.statSync(`${pkgPath}/package.json`).isFile();
  console.log(chalk.yellow(`[rsw::optimized] wasm-pack build ${getCrateName(_crate)}`));
} catch (e) {
  compileOne({ config: opts, crate: _crate, sync: true });
}
```

但是很快就打脸了，有一种情况是未考虑到的，就是在停止服务后修改文件，当启动服务后，因为之前build的文件一直都存在，所以并不会执行build，只有在启动服务后，修改文件，才会触发热更新。

解决这个问题，我一直在想如何去缓存文件信息，做比较，如果两次文件内容都无变化，则文件未被修改过，但是又想到，如果文件特别多，`存储读取`又会产生新的问题，感觉问题被复杂化了，但是却没什么头绪。

和朋友讨论这个插件，朋友的一句话点醒了我。不需要存储读取文件，因为文件内容是不需要关心的，我们其实更关心的问题是文件是否被修改，而文件是否修改，可以通过查看文件修改时间。因为build是后于源码修改的，所以源码的修改时间一定小于build目录下的文件时间。如果源码修改时间大于了build目录下的文件时间。则表示文件修改了，但未执行build。

这也就有了下面这段代码

```js
// 核心代码：比较文件变更时间
// https://github.com/lencx/vite-plugin-rsw/blob/main/src/utils.ts#L34-L84
try {
  // benchmark file modified time
  const pkgMtime = fs.statSync(benchmarkFile).mtimeMs;
  const cargoMtime = fs.statSync(cargoToml).mtimeMs;
  let isOptim = true;

  // run wasm-pack
  if (cargoMtime > pkgMtime) {
    isOptim = false;
    return runCallback();
  }

  (function dirsMtime(dir) {
    for (let f of fs.readdirSync(dir)) {
      const _f = fs.statSync(`${dir}/${f}`);

      if (_f.isDirectory()) {
        if (_f.mtimeMs > pkgMtime) {
          // run wasm-pack
          isOptim = false;
          runCallback();
          break;
        } else {
          dirsMtime(`${dir}/${f}`)
        }
      }

      if (_f.isFile()) {
        if (_f.mtimeMs > pkgMtime) {
          // run wasm-pack
          isOptim = false;
          runCallback();
          break;
        }
      }
    }
  })(dirs)

  isOptim && optimCallback();
} catch(e) {
  // no such file or directory
  runCallback();
}
```

## 总结

人很容易在固有思维下钻牛角尖，走到最后才发现自己虽然很努力，但似乎方向不太对。和朋友聊天，或者让自己放松一下，可能会有不一样的收获。