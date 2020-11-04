# Terminal

* **Theme**
  * [terminal theme](https://github.com/lencx/mtc/blob/main/static/terminal/lencx.terminal)
  * [iTerm2 theme](https://github.com/lencx/mtc/blob/main/static/terminal/Profiles.json)

---

* [«win» Windows Terminal](https://github.com/microsoft/terminal): The new Windows Terminal and the original Windows console host, all in the same place!
* [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh): Oh My Zsh will not make you a 10x developer...but you may feel like one.
  * [antigen](https://github.com/zsh-users/antigen): The plugin manager for zsh.
  * [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions): Fish-like autosuggestions for zsh.
  * [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting): Fish shell like syntax highlighting for Zsh.
  * [history-substring-search](https://github.com/zsh-users/zsh-history-substring-search): 🐠 ZSH port of Fish history search (up arrow)
* [z](https://github.com/rupa/z): z - jump around.
* [GitHub CLI](https://github.com/cli/cli): GitHub’s official command line tool.
* [asciinema](https://asciinema.org): Record and share your terminal sessions, the right way.
* [bat](https://github.com/sharkdp/bat): A cat(1) clone with wings.
* [fff](https://github.com/dylanaraps/fff): 📁 A simple file manager written in bash.
* [tmux](https://github.com/tmux/tmux): tmux is a terminal multiplexer.
* [tig](https://github.com/jonas/tig): Text-mode interface for git.
* [starship](https://github.com/starship/starship): ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!
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

## Install

* `pip`

```bash
# step1:
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# step2:
sudo python get-pip.py
```

* `wakatime`

```bash
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

* `oh-my-zsh plugins`

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
