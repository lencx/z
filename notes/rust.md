# Rust笔记

## 语言版本说明

* nightly
* beta
* stable

```bash
  2006      2015(Edition)    2018(Edition)     2020(now)     2021(Edition)
----|-----------|-----------------|--------------|--------------|---------------> Time
  0.1.0    1.0.0(SemVer)    1.31.0(SemVer)   1.45.1(SemVer)   1.?.?(SemVer)
```

## 词法

> 6大部分

* 关键字(Keyword)
  * 严格关键字(Strict)
  * 保留字(Reserved)
  * 弱关键词(Weak)
* 标识符(Identifier)
* 注释(Comment)
  * `//!  - 模块级文档注释，置于模块头部`
  * `//!! - 模块级文档注释，但是和上面注释置于同一行`
  * `//!  - 模块级文档注释，但是会换行`
  * `/*!  - 模块块级文档注释 */`
  * `/*!! - 模块块级文档注释，和上面注释置于同一行 */`
  * `/*!  - 模块块级文档注释，但是会换行 */`
  * `//   - 普通行注释`
  * `///  - 行级文档注释(必须是3斜杠)`
  * `//// - 普通行注释`
  * `/*   - 普通块级注释 */`
  * `/**  - 块级文档注释(精确)2个星号 */`
  * `/*** - 普通注释 */`
* 空白(Whitespace)
* 词条(Tokens)
  * 语言项(item)
  * 块(block)
  * 语句(Stmt)
  * 表达式(Expr)
  * 模式(Pattern)
  * 关键字(Keyword)
  * 标识符(Identifier)
  * 字面量(Literal)
  * 生命周期(Lifetime)
  * 可见性(Vis)
  * 标点符号(Punctuation)
  * 分隔符(delimiter)
  * 词条树(Token Tree)
  * 属性(Attribute)
* 路径(Path)
