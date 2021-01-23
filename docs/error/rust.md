# Rust错误

## macOS系统升级错误

* cargo install error

```bash
cargo install wasm-pack
# error: linking with `cc` failed: exit code: 1
# |
# = note: "cc" "-m64" "-arch" "x86_64" "-L" "/Users/user/.rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/x86_
# ...
# ...
# = note: xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

# 解决方案
# 1. 重装xcode command line
xcode-select --install
# 2. 如果未解决，尝试
sudo xcode-select -switch /
```
