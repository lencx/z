<template>
  <div class="calendar">
    <div class="btns">
      <div @click="getPrev">◀️</div>
      <div
        class="now_btn"
        :class="isNow ? 'active' : ''"
        @click="getNow"
      >
        {{nYear}} • {{`${nMonth}`.padStart(2, '0')}}
      </div>
      <div @click="getNext">▶️</div>
    </div>
    <div class="head">
      <div class="week_item item" v-for="i in sWeek">
        {{i}}
      </div>
    </div>
    <div class="body">
      <div
        class="day_item item"
        :class="[
          isNow && (item === now.day) ? 'active' : '',
          `week_${index%7}`,
        ]"
        v-for="(item, index) in dayGroup"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
// 〇⚪️⏺
// const str_month = '㋀㋁㋂㋃㋄㋅㋆㋇㋈㋉㋊㋋'.split('');
// const str_days = '㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶㏷㏸㏹㏺㏻㏼㏽㏾'.split('');
// const str_hours = '㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍘'.split('');
// const str_num = '〇一二三四五六七八九'.split('');
// const str_days_symbol = '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛'.split('');
const str_week = '🅂 🄼 🅃 🅆 🅃 🄵 🅂'.split(' ');

const fmtYearMonthDayHours = (date = new Date()) => {
  const m = date.getMonth();
  const d = date.getDate();
  const h = date.getHours();
  const y = date.getFullYear();
  const _y = `${y}`.split('').map(i => str_d[i]).join('');
  return [_y, str_month[m], str_days[d-1], str_hours[h-1]];
}

const getMonthDays = (year, month) => {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);
  // console.log(year, month);
  return (end - start) / (1000 * 60 * 60 * 24);
}

const getMonthFirst = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
}

const getDayGroup = (year, month) => {
  const a = getMonthFirst(year, month);
  const b = getMonthDays(year, month);
  // return [...new Array(a).fill('〇'), ...str_e.slice(0, b)];
  return [...new Array(a).fill(''), ...new Array(b).fill(0).map((_, idx) => idx + 1)];
}

const getCurrentTime = () => {
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const y = date.getFullYear();
  return { year: y, month: m, day: d, hours: h };
}

const now = getCurrentTime();

export default {
  data() {
    return {
      // sYear: '',
      // sDays: str_days,
      // sDaysSymbol: str_days_symbol,
      sWeek: str_week,

      now,
      dayGroup: getDayGroup(now.year, now.month),
      nYear: now.year,
      nMonth: now.month,

      isNow: true,
    };
  },
  methods: {
    getPrev() {
      if (this.nMonth <= 1) {
        this.nYear = this.nYear - 1;
        this.nMonth = 12;
      } else {
        this.nMonth = this.nMonth - 1;
      }
      this.setNow();
      this.dayGroup = getDayGroup(this.nYear, this.nMonth);
    },
    getNext() {
      if (this.nMonth >= 12) {
        this.nYear = this.nYear + 1;
        this.nMonth = 1;
      } else {
        this.nMonth = this.nMonth + 1;
      }
      this.setNow();
      this.dayGroup = getDayGroup(this.nYear, this.nMonth);
    },
    getNow() {
      this.nYear = now.year;
      this.nMonth = now.month;
      this.dayGroup = getDayGroup(now.year, now.month);
      this.isNow = true;
    },
    setNow() {
      if (this.nYear === now.year && this.nMonth === now.month) {
        this.isNow = true;
      } else {
        this.isNow = false;
      }
    }
  },
}
</script>

<style scoped>
.calendar {
}
.head, .btns, .body {
  width: 196px;
}
.btns {
  margin-bottom: 4px;
  user-select: none;
  font-weight: bold;
}
.btns div {
  width: 30px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  background: #eee;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  color: #3eaf7c;
}
.btns .now_btn {
  width: 126px;
  color: #000;
  background: #eee;
  font-size: 14px;
}
.btns .now_btn.active {
  color: #fff;
  background: #3eaf7c;
}
.item {
  width: 24px;
  height: 24px;
  background: #eee;
  display: inline-block;
  margin: 2px;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
}
.day_item {
  border-radius: 50%;
}
.week_item {
  color: #3eaf7c;
  display: inline-block;
  font-size: 20px;
  /* background: transparent; */
  /* border: dashed 1px #3eaf7c; */
  /* box-sizing: border-box; */
}
.week_0, .week_6 {
  background: #e9e9e9;
  color: #999;
}
.active {
  background: #3eaf7c;
  color: #fff;
}
</style>