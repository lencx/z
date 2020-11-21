# Visual Studio Code

## Extensions

::: details Lists

* [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)
* [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
* [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
* [[Deprecated] Deno](https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno)
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
* [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
* [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
* [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)

* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
* [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
* [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)
* [crates](https://marketplace.visualstudio.com/items?itemName=serayuzgur.crates)
* [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)
* [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
* [Foam for VSCode (Wikilinks to Markdown)](https://marketplace.visualstudio.com/items?itemName=foam.foam-vscode)
* [Gray Matter](https://marketplace.visualstudio.com/items?itemName=philipbe.theme-gray-matter)
* [filesize](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize)
* [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)
* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

* [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
* [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)
* [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
* [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
* [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
* [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
* [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
* [Community Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-community-material-theme)
* [Color Info](https://marketplace.visualstudio.com/items?itemName=bierner.color-info)
* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* [Shades of Purple](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

* [LeetCode](https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode)
* [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
* [MDX Preview](https://marketplace.visualstudio.com/items?itemName=xyc.vscode-mdx-preview)
* ...

---

> **Rust**

* [rust-analyzer](https://rust-analyzer.github.io/manual.html#vs-code)

<!-- * [rls](https://github.com/rust-lang/rls)

```bash
# 1.
rustup toolchain install nightly
# 2.
rustup default nightly
# 3.
rustup update
# 4.
rustup component add rls rust-analysis rust-src
``` -->

:::

## [User Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

::: details (javascript|typescript)(react)?.json

```json
// .js .jsx .ts .tsx
{
	"author & create_at": {
		"prefix": "ac",
		"body": [
			"/**",
			" * @author: lencx",
			" * @create_at: $CURRENT_MONTH_NAME_SHORT $CURRENT_DATE, $CURRENT_YEAR",
			" */",
			"",
			"$1"
		]
	},
	"Print to console -> line_number & file_path": {
		"prefix": "ll",
		"body": [
			"console.log('«$TM_LINE_NUMBER» ${TM_FILEPATH/.*(.*([\\/].*){3})$/$1/} ~> ', $1);",
			"$0"
		],
		"description": "Log(line_num & path)"
	},
	"Print to console -> enum": {
		"prefix": "le",
		"body": [
			"console.${1|info,warn,error,table,log|}($2)",
			"$0"
		],
		"description": "Log(enum)"
	}
}
```

:::

::: details rust.json

```json
// .rs
{
	"lencx": {
		"prefix": "lencx",
		"body": [
			"// Copyright $CURRENT_YEAR lencx",
			"// license that can be found in the LICENSE file or at",
			"// https://opensource.org/licenses/MIT.",
			"",
			"$1"
		]
	}
}
```

:::

## Settings

::: details settings.json

```json
{
  "editor.fontFamily": "Operator Mono, Dank Mono, Fira Code, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.lineHeight": 20,
  "editor.fontLigatures": true,
  "editor.smoothScrolling": true,
  // "editor.cursorStyle": "line",
  // "editor.cursorBlinking": "solid",
  "editor.cursorWidth": 3,

  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,

  // -------------- colorCustomizations -------------------
  "workbench.colorCustomizations": {
    "editorIndentGuide.activeBackground": "#297891",
    "activityBarBadge.background": "#FF4081",
    "list.activeSelectionForeground": "#FF4081",
    "list.inactiveSelectionForeground": "#FF4081",
    "list.highlightForeground": "#FF4081",
    "scrollbarSlider.activeBackground": "#FF408150",
    "editorSuggestWidget.highlightForeground": "#FF4081",
    "textLink.foreground": "#FF4081",
    "progressBar.background": "#FF4081",
    "pickerGroup.foreground": "#FF4081",
    "tab.activeBorder": "#FF4081",
    "notificationLink.foreground": "#FF4081",
    "editorWidget.resizeBorder": "#FF4081",
    "editorWidget.border": "#FF4081",
    "settings.modifiedItemIndicator": "#FF4081",
    "settings.headerForeground": "#FF4081",
    "panelTitle.activeBorder": "#FF4081",
    "breadcrumb.activeSelectionForeground": "#FF4081",
    "menu.selectionForeground": "#FF4081",
    "menubar.selectionForeground": "#FF4081"
  },

  //---------------- TODO TREE ------------------------
  "todo-tree.tree.showScanModeButton": false,
  "todo-tree.general.tags": ["TODO:", "FIX:", "BUG:"],
  // "todo-tree.regex.regex": "((//|#|<!--|;|/\\*)\\s*($TAGS)|^\\s*- \\[ \\])",
  "todo-tree.highlights.defaultHighlight": {
    "gutterIcon": true
  },
  "todo-tree.highlights.customHighlight": {
    "TODO:": {
      "foreground": "#000",
      "background": "#ffbd2a",
      "iconColour": "#ffbd2a"
    },
    "FIX:": {
      "foreground": "#fff",
      "background": "#54b2ea",
      "icon": "pin",
      "iconColour": "#54b2ea"
    },
    "BUG:": {
      "foreground": "#fff",
      "background": "#eb4d9c",
      "icon": "zap",
      "iconColour": "#eb4d9c"
    }
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.colorTheme": "Shades of Purple",
  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 0
}
```

:::
