# git速查表

![git](./img/git-1.png)

名词解释

* `Workspace`: 工作区
* `Index / Stage`: 暂存区
* `Repository`: 仓库区(或本地仓库)
* `Remote`: 远程仓库

::: tip

暂存: 在下一次提交中的所有更改。

* 对工作目录(working directory)中的文件进行更改。
* 使用`git add`命令将这些更改从工作目录(working directory)移动到暂存区(staging area)。
* git尚未保存更改。需要运行`git commit`命令将更改从暂存区(staging area)移动到本地存储库(local repository)。

可以使用`git status`命令检查文件和暂存区的状态。如果未暂存要提交的更改，则不会保存更改。

:::

## 常用命令

### 创建 git 仓库

```bash
# 创建本地库
git init

# 克隆远程库
git clone <repo_url>
```

### 添加文件

```bash
# 将修改文件提交至暂存区
git add <filename>

# 将所有修改文件提交至暂存区
git add .

# 将暂存区提交到仓库区
git commit -m "<message>"

# 修改上一次提交
git commit -amend [-m "<message>"]
```

### 查看状态

```bash
# 查看仓库状态
git status

# 查看工作区状态
git status -s

# 查看修改文件内容
git diff <filename>

# 查看特定提交与工作区的差异
git diff <commit_id>

# 查看两次提交的区别
git diff <commit_id_1> <commit_id_2>

# 查看每个 log 首行
git log --oneline

# 查看所有 log，并以提交图形显示
git log --graph
```

### 文件删除

```bash
# 将文件从暂存区和工作区中删除
git rm <filename>

# 将文件从暂存区删除，保留在工作区
git rm --cached <filename>
```

### 分支管理

```bash
# 创建分支
git branch <branch_name>

# 切换到指定分支
git checkout/switch <branch_name>

# 创建并切换分支
git checkout -b <branch_name>

# 删除分支
git branch -D/d <branch_name>

# 删除远程分支
git push origin --delete <branch_name>

# -r 列出远程分支；-a 列出远程和本地分支
git branch [-r|-a]

# 将指定提交的改变复制到当前分支
git cherry-pick <commit_id>

# 合并指定分支到当前分支上
git merge <branch_name>

# 允许更改一系列提交，从而修改存储库的历史记录。可以重新排序，编辑或压缩提交。
# @see https://docs.github.com/en/github/using-git/about-git-rebase
# @see https://git-scm.com/docs/git-rebase
git rebase
```

### 标签管理

```bash
# 指定标签信息
git tag -a <tag_name> -m "<message>"

# 查看所有标签
git tag

# 推送本地标签至远程
git push origin <tag_name>

# 推送所有标签
git push origin --tags
```

### 保存与恢复工作

```bash
# 保存工作状态
git stash

# 恢复并删除已保存工作状态
git stash pop
```

### 远程库操作

```bash
# 关联远程库
git remote add origin <url>

# 添加远程库
git remote add <short_name> <url>

# 查看远程库信息[显示URL]
git remote [-v]

# 第一次推送到远程main分支
git push -u origin main

# 第一次推送到远程对应分支
git push origin <branch_name>

# 推送数据至远程版本库
git push [remote] [local_branch]:[remote_branch]

# 拉取远程库分支与本地分支合并
git pull [remote] [remote_branch]
```

### 版本回退

```bash
# 回到之前版本，该版本之后的改变保存在暂存区(已执行add操作)
git reset --soft

# 回到之前版本，该版本之后的改变未丢失(未执行add操作)
git reset --mixed

# 回退到指定版本
git reset --hard <commit_id>

# 查看历史提交命令及`commit id`
git reflog

# 暂存区撤销指定文件更改
git checkout -- <filename>

# 暂存区撤销所有文件更改
git checkout .
```
