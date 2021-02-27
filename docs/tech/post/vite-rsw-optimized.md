# Vite Rsw插件启动优化

插件地址: https://github.com/lencx/vite-plugin-rsw

## 启动缓慢

> 项目首次启动，会经历以下步骤

1. 执行`wasm-build`，会在当前目录下生成`pkg`目录，`pkg`目录中的文件是一个标准的npm包。
2. 如果插件有配置`unLinks`，则会执行`npm unlink`，卸载npm包。
3. 把在`1步骤`中生成的npm包，通过`npm link`，安装npm包。

**总结：2，3步骤耗时短，几乎可以忽略不计，但是1步骤执行构建，会花费大量时间，而且如果有多个`rust crates`，则耗时会翻倍。虽然`vite`本身速度很快，但是在使用插件后启动速度会被拉垮。**

## 优化思路

### 第一版

当启动服务的时候，会执行`npm run dev`命令，每次执行该命令，都会执行`wasm-build`，生成`xx/pkg`目录，`pkg`中包含有`package.json`，如果目录中包含`package.json`，是不是就意味着该`rust crate`已经被构建过了，否则就是未构建。带着这个思路，开始项目优化。

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

### 第二版

第一版优化存在一个问题，当在停止服务(`npm run dev`)之后，编辑rust文件，重新启动文件并不会进行构建，后面和一位大佬讨论该问题，获得到新思路，通过比对文件是修改时间，判断是否需要构建，因为rust文件变更之后才会产生构建，所以`src`目录下的所有文件及`Cargo.toml`的最后修改时间都必然小于`pkg`目录下所有文件的生成时间。如果大于则表示，该文件是在停止服务后修改的，重新启动服务(`npm run dev`)后需要执行`wasm-pack`的cli进行构建。

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

**总结：经过优化之后的代码，只有在未构建的情况下会执行构建，如果都构建过，并且在停止服务之后未修改文件，则启动的时候会跳过构建，使其接近`vite`项目原本启动速度。**

![rsw run](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd747bc8e89c4112b7058f29db06823e~tplv-k3u1fbpfcp-watermark.image)
