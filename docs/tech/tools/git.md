# Git

## .gitconfig

```toml
# Copyright 2020 lencx
# license that can be found in the LICENSE file or at
# https://opensource.org/licenses/MIT.

# use: ~/.gitconfig

[user]
    name = lencx
    email = cxin1314@gmail.com
[alias]
    aa = add .
    st = status
    cm = commit -m
    co = checkout
    cb = checkout -b
    br = branch
    df = diff
    rh = reset --hard
    rb = branch -D
    lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    last = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -1 HEAD
    rnlast = commit --amend
[core]
    editor = vim
[filter "lfs"]
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
    clean = git-lfs clean -- %f
```

## Multiple SSH Keys

* `Step1: keygen`

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/gitee_id_rsa
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ~/.ssh/github_id_rsa
```

* `Step2: config`

```bash
# vi ~/.ssh/config
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

* `Step3: test`

```bash
ssh -T git@gitee.com
ssh -T git@github.com
```
