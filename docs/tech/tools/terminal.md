# Terminal

* **Theme**
  * [terminal theme](https://github.com/lencx/mtc/blob/main/static/terminal/lencx.terminal)
  * [iTerm2 theme](https://github.com/lencx/mtc/blob/main/static/terminal/Profiles.json)

---

## Plugins

* [«win» Windows Terminal](https://github.com/microsoft/terminal): The new Windows Terminal and the original Windows console host, all in the same place!
* [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh): Oh My Zsh will not make you a 10x developer...but you may feel like one.

  ```bash
  # install
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  # or
  sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
  ```

  * [antigen](https://github.com/zsh-users/antigen): The plugin manager for zsh.
  * [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions): Fish-like autosuggestions for zsh.
  * [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting): Fish shell like syntax highlighting for Zsh.
  * [history-substring-search](https://github.com/zsh-users/zsh-history-substring-search): 🐠 ZSH port of Fish history search (up arrow)

  ```bash
  # @see: https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md
  # step1:
  # 1.
  git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
  # 2.
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
  # 3.
  git clone https://github.com/zsh-users/zsh-history-substring-search ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-history-substring-search

  # step2: ~/.zshrc
  plugins=(
    [plugins...]
    zsh-autosuggestions
    zsh-syntax-highlighting
    history-substring-search
  )
  ```

  * [wakatime](https://github.com/sobolevn/wakatime-zsh-plugin): 🕒Track how much time you have spent in your terminal!

  ```bash
  # preinstall
  # step1:
  curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
  # step2:
  sudo python get-pip.py
  ############

  # @see: https://wakatime.com/terminal
  # step1:
  sudo pip install wakatime

  # step2:
  cd ~/.oh-my-zsh/custom/plugins && git clone https://github.com/sobolevn/wakatime-zsh-plugin.git wakatime

  # step3:
  # add `wakatime` to the list of `plugins` in your `~/.zshrc` file

  # step4:
  # Make sure your `API key` is in your `~/.wakatime.cfg` file.
  ```

* [z](https://github.com/rupa/z): z - jump around.
* [GitHub CLI](https://github.com/cli/cli): GitHub’s official command line tool.
* [asciinema](https://asciinema.org): Record and share your terminal sessions, the right way.
* [bat](https://github.com/sharkdp/bat): A cat(1) clone with wings.
* [fff](https://github.com/dylanaraps/fff): 📁 A simple file manager written in bash.
* [tmux](https://github.com/tmux/tmux): tmux is a terminal multiplexer.
* [tig](https://github.com/jonas/tig): Text-mode interface for git.
* [starship](https://github.com/starship/starship): ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!

  ```bash
  curl -fsSL https://starship.rs/install.sh | bash

  vi ~/.zshrc
  eval "$(starship init zsh)"
  ```

* [cavif](https://github.com/kornelski/cavif): PNG/JPEG to AVIF converter.
* [ripgrep](https://github.com/BurntSushi/ripgrep): ripgrep recursively searches directories for a regex pattern.
* [fd](https://github.com/sharkdp/fd): A simple, fast and user-friendly alternative to 'find'
* [exa](https://github.com/ogham/exa): A modern version of ‘ls’.
* [lsd](https://github.com/Peltoche/lsd): The next gen ls command.
* [hexyl](https://github.com/sharkdp/hexyl): A command-line hex viewer.
* [xsv](https://github.com/BurntSushi/xsv): A fast CSV command line toolkit written in Rust.
* [csview](https://github.com/wfxr/csview): 📠 A high performance csv viewer with cjk/emoji support.
* [rip(Rm ImProved)](https://github.com/nivekuil/rip): A safe and ergonomic alternative to rm.
* [The Tin Summer](https://github.com/vmchale/tin-summer): Find build artifacts that are taking up disk space.
* [git-journal](https://github.com/saschagrunert/git-journal): 📖 The Git Commit Message and Changelog Generation Framework.
* [ffsend](https://gitlab.com/timvisee/ffsend): 📬 Easily and securely share files from the command line. A fully featured Firefox Send client.
* [Tokei](https://github.com/XAMPPRocky/tokei): Count your code, quickly.
* [hyperfine](https://github.com/sharkdp/hyperfine): A command-line benchmarking tool.
* [eva](https://github.com/nerdypepper/eva): a calculator REPL, similar to bc(1)
* [svgcleaner](https://github.com/RazrFalcon/svgcleaner): svgcleaner could help you to clean up your SVG files from the unnecessary data.
* [watchexec](https://github.com/watchexec/watchexec): Executes commands in response to file modifications.
* [procs](https://github.com/dalance/procs): A modern replacement for ps written in Rust.
* [GitHub CLI](https://github.com/cli/cli): GitHub’s official command line tool.
* [Alacritty](https://github.com/alacritty/alacritty): A cross-platform, GPU-accelerated terminal emulator.
* [nat](https://github.com/willdoescode/nat): ⚡️ nat - the 'ls' replacement you never knew you needed⚡️
* ...

---

## .zshrc

```bash
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=~/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="kafeitu"

# defaults write com.apple.finder AppleShowAllFiles -bool

################## open appliaction ##################
code () {VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $*;}
alias v=code

################## command alias ##################
alias zs="source ~/.zshrc"
alias cls="clear"
alias la="ls -a"
alias ll="ls -l"
alias del="rm -rf"
alias lip="ipconfig getifaddr en0"

alias mkcd='foo(){ mkdir -p "$1"; cd "$1" }; foo'
alias ..="cd .."
alias ...=".. && cd .."
alias .3="... && cd .."
# alias now="date +\"%T %d-%m-%Y\""

alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'

alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"

## allow apps downloaded from: anywhere
# sudo spctl --master-enable
# sudo spctl --master-disable

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  # https://github.com/zsh-users/zsh-autosuggestions
  zsh-autosuggestions
  # https://github.com/zsh-users/zsh-syntax-highlighting
  zsh-syntax-highlighting
  # https://github.com/zsh-users/zsh-history-substring-search
  history-substring-search
  # https://github.com/sobolevn/wakatime-zsh-plugin
  wakatime
)

# https://github.com/starship/starship
eval "$(starship init zsh)"

source $ZSH/oh-my-zsh.sh

# User configuration

### go
export GO111MODULE=on
export GOPROXY=https://goproxy.io

### flutter
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=~/flutter/bin:$PATH
export PATH=~/flutter/bin/cache/dart-sdk/bin:$PATH
```

## Commands

```bash
cat /etc/shells

# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh

# Changing shell for user.
chsh -s /bin/zsh
```
