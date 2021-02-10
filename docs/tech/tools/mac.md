# Mac FAQ

## 开发配置

::: danger Mac 隐藏文件

```bash
defaults write com.apple.finder AppleShowAllFiles -bool <true|false>
# or
defaults write com.apple.finder AppleShowAllFiles <YES|NO>
```

`苹果菜单()` -> `强制退出(Force Quit...)` -> `访达(Finder)` -> `重新启动(Relaunch)`
:::

::: warning 安全及隐私
`application` cannot be opened because the developer cannot be verified.
macOS cannot verify that this app is free from malware.

```bash
sudo spctl --master-disable
```

:::

::: tip Mac 修改计算机、主机名

```bash
# 查看计算机或主机名
scutil --get <ComputerName|HostName>
# 设置计算机或主机名
sudo scutil --set <ComputerName|HostName> NEW_NAME
```

:::

## 快捷键

- Command: ⌘
- Option: ⌥
- Control: ⌃
- Shift: ⇧
- Delete: ⌫
- ESC: ⎋
- Enter: ↩︎
- Tab: ⇥

| 组合键          | 描述                     |
| --------------- | ------------------------ |
| `通用(General)` |
| ⌘ + Z           | 撤销                     |
| ⌘ + X           | 剪贴                     |
| ⌘ + C           | 拷贝(Copy)               |
| ⌘ + V           | 粘贴                     |
| ⌘ + A           | 全选(All)                |
| ⌘ + S           | 保存(Save)               |
| ⌘ + F           | 查找(Find)               |
| `文件管理器`      |
| ⌘ + ⇧ + N       | 新建文件夹(New)          |
| ⌘ + ⌫           | 删除文件或文件夹(Delete) |

<!-- | `系统(System)`  |                    |
| ⌘ + R           | 恢复功能(Recovery) |
| ⌘ + ⌥ + P + R   | 重置 NVRAM         | -->
