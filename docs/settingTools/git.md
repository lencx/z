# Git

::: details .gitconfig

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

:::

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

## Error Handling

::: details ssh: connect to host github.com port 22: Connection timed out

```bash
# https://stackoverflow.com/questions/15589682/ssh-connect-to-host-github-com-port-22-connection-timed-out
git clone git@github.com:username/repo.git

Cloning into 'repo'...
ssh: connect to host github.com port 22: Operation timed out
fatal: Could not read from remote repository.

sudo vim ~/.ssh/config

# .ssh/config
Host github.com
 Hostname ssh.github.com
 Port 443

ssh -T git@github.com

The authenticity of host '[ssh.github.com]:443 ([xxx.xxx.xxx.xxx]:443)' can't be established.
RSA key fingerprint is SHA256:xxxxxxxx.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[ssh.github.com]:443,[xxx.xxx.xxx.xxx]:443' (RSA) to the list of known hosts.
Hi lencx! You've successfully authenticated, but GitHub does not provide shell access.
```

::: details Pulling without specifying how to reconcile divergent branches is discouraged

```bash
git pull

warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.

git config pull.ff only
```

<!-- How to Rename Git Local and Remote Branches -->
