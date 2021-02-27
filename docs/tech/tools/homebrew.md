# Homebrew

[`Homebrew`](https://brew.sh)是一款包管理工具，目前支持 macOS 和 linux 系统。主要有四个部分组成: `brew`、`homebrew-core`、`homebrew-cask`、`homebrew-bottles`

| 名称             | 说明                                  |
| ---------------- | ------------------------------------- |
| brew             | Homebrew 源代码仓库                   |
| homebrew-core    | Homebrew 核心源                       |
| homebrew-cask    | 提供 macOS 应用和大型二进制文件的安装 |
| homebrew-bottles | 预编译二进制软件包                    |

```bash
# 安装Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# 卸载Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
```

## 常用命令

```bash
# 安装
brew install

# 更新
brew update

# 查看相关配置信息
brew config
```

## Homebrew 镜像

```bash
# 中科大源
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

brew update
```

```bash
# 清华大学源
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

brew update
```

```bash
# 恢复默认源
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

brew update

# homebrew-bottles配置只能手动删除
# 将`~/.zprofile`文件中的`HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xxx.com`内容删除
# 并执行`source ~/.zprofile`
```

## bottles镜像

* 设置中科大源

从`macOS Catalina(10.15.x)`版开始，Mac使用zsh作为默认Shell，对应文件是`.zprofile`

```bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zprofile
source ~/.zprofile
```

如果是`macOS Mojave`及更低版本，并且没有自己配置过zsh，对应文件则是.bash_profile

```bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

* 设置清华源

```bash
# 把
https://mirrors.ustc.edu.cn/homebrew-bottles

# 替换为
https://mirrors.ustc.edu.cn/homebrew-bottles
```

## 相关链接

* [清华大学开源软件镜像站](https://mirror.tuna.tsinghua.edu.cn/help/homebrew)
* [中科大源](http://mirrors.ustc.edu.cn/help/brew.git.html)