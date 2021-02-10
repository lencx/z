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

## Git cheat sheet

### Staging and Committing

```bash
┌--------------------┐            ┌--------------┐     ┌-----------------------------┐
| working directory  |            | staging area |     | .git directory(repository)  |
└--------------------┘            └--------------┘     └-----------------------------┘
  ┌------┐     |      staging changes       |                           |
┌ | file |     |--------------------------->|     committing changes    |
| └------┘     |                            |-------------------------->|
|changes|      |                            |                           |
└-------┘      |                            |                           |
```

::: tip

暂存: 在下一次提交中的所有更改。

* 对工作目录(working directory)中的文件进行更改。
* 使用`git add`命令将这些更改从工作目录(working directory)移动到暂存区(staging area)。
* git尚未保存更改。需要运行`git commit`命令将更改从暂存区(staging area)移动到本地存储库(local repository)。

可以使用`git status`命令检查文件和暂存区的状态。如果未暂存要提交的更改，则不会保存更改。

:::

### Git command summary

```bash
##################### config #####################
# your name and email address
$ git config --global user.name "lencx"
$ git config --global user.email "your_email@example.com"
# show all git configurations
$ git config --list


##################### basic #####################
# 将现有的git存储库推送到github
# push an existing git repository to github
git remote add origin git@github.com:<USER_NAME>/<REPO>.git
git push origin master

# 更详细的git远程信息
# for more detailed git remote information
git remote -v
# inspect a git remote
git remote show origin

# 用于恢复到特定的提交
# is used for reverting back to a particular commit
git reset --hard <commit number>

################# delete branch #################
# locally
git branch -d localBranchName
# remotely
git push origin --delete remoteBranchName
```
