# Vite+Vue3实现日历

[查看源码](https://github.com/lencx/vue3-examples)

## 项目搭建

```bash
# 使用vite脚手架创建项目
yarn create vite-app my-app
# 安装依赖
yarn
# 启动项目
yarn dev
```

## 分析

日历主要功能有三个

* 翻页查看上下年，上下月
* 高亮显示当前日期
* 每天所对应的星期

```bash
# 大概就长这个样子吧
⏪ ◀️ 2020 • 7 ▶️ ⏩ # 第一行是操作按钮
🅂 🄼 🅃 🅆 🅃 🄵 🅂 # 第二行是星期
〇 〇 〇 ① ② ③ ④ # 第三行是日期
⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪
⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱
⑲ ⑳ ㉑ ㉒ ㉓ ㉔ ㉕
㉖ ㉗ ㉘ ㉙ ㉚ ㉛
```

::: tip 难点

* 动态计算某年中的某个月有多少天。如大小月，特殊月份2月等。
* 每周有7天，一个月中的每天何如与星期对应。

:::

## 实现步骤

### Step1

> 日历主结构，分为按钮，星期和日期三部分，常规布局，没什么难度。

```vue
<template>
  <div class="calendar">
    <!-- 操作按钮 -->
    <div class="btns">
      <!-- TODO: 按钮需绑定事件 -->
      <div class="ybtn">◀◀</div> <!-- -1年 -->
      <div class="mbtn">◀</div> <!-- -1月 -->
      <div class="now_btn">YYYY • MM</div> <!-- 当前时间 -->
      <div class="mbtn">▶</div> <!-- +1月 -->
      <div class="ybtn">▶▶</div> <!-- +1年 -->
    </div>
    <!-- 星期符号 -->
    <div class="head">
      <!-- week是数组字符串用于显示星期：🅂 🄼 🅃 🅆 🅃 🄵 🅂 -->
      <div class="week_item item" v-for="i in week" v-html="i" />
    </div>
    <!-- 日期 -->
    <div class="body">
      <!-- monthDays是本月所有日期天数 -->
      <div
        class="day_item item"
        v-for="item in monthDays"
        v-html="item"
      />
    </div>
  </div>
</template>

<style>
/* 省略 */
</style>
```

### Step2

> 日历的核心功能，计算每月天数及某天所对应的的星期

```js
// /~/utils/date.js
/**
 * getMonthDays: 计算某年某月有多少天
 * @param year - 年份
 * @param month - 月份
 */
export const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

/**
 * getMonthFirst: 获取某年某月的第一天是星期几
 * @param year - 年份
 * @param month - 月份
 */
export const getMonthFirst = (year, month) => new Date(year, month - 1, 1).getDay();

/**
 * getDays: 获取某年某月的所有天数及对应星期
 * 1号如果非星期日，则根据1号所在星期数往前补空白
 * @param year - 年份
 * @param month - 月份
 */
export const getDays = (year: number, month: number) => {
  const a = getMonthFirst(year, month);
  const b = getMonthDays(year, month);
  return Array.from({length: a + b }, (_, i) => i >= a ? (i + 1 - a) : -1);
}

/**
 * getCurrentTime: 获取当前时间
 */
export const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
}
```

### Step3

主要分为事件绑定和样式处理，需高亮显示当前日期，需要将日期和星期做对应，周六和周日特殊样式显示。

```vue
<!-- script-setup: 是将options.setup提取到top-level，使代码更简洁  -->
<script setup>
import { reactive } from 'vue'
import { getDays, getCurrentTime } from '/~/utils/date'

const week = '🅂 🄼 🅃 🅆 🅃 🄵 🅂'.split(' ')

// 存储当前日期，点击按钮后的新日期
const state = reactive({
  // 省略...
})

// init
// 获取当前时间

// 根据点击按钮后的新日期
// 可以推算上一年或上一月
function getPrev() {
  // 省略...
}

// 根据点击按钮后的新日期
// 可以推算下一年或下一月
function getNext(type) {
  // 省略...
}

// 现在
function getNow() {
  // 省略...
}

export { week, /* 其他数据 */ }
export { getPrev, getNext, getNow }
</script>
```
