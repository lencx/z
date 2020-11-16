<template>
  <div class="calendar">
    <div class="btns">
      <div class="ybtn" @click="() => getPrev('Y')">◀◀</div>
      <div @click="getPrev">◀</div>
      <div
        class="now_btn"
        :class="isNow ? 'active' : ''"
        @click="getNow"
      >
        {{nYear}} • {{`${nMonth}`.padStart(2, '0')}}
      </div>
      <div @click="getNext">▶</div>
      <div class="ybtn" @click="() => getNext('Y')">▶▶</div>
    </div>
    <div class="head">
      <div
        class="week_item item"
        v-for="i in sWeek"
        v-html="i"
      />
    </div>
    <div class="body">
      <div
        class="day_item item"
        :class="[
          isNow && (item === now.day) ? 'active' : '',
          `week_${index%7}`,
        ]"
        v-for="(item, index) in dayGroup"
        v-html="item"
      />
    </div>
  </div>
</template>

<script>
const str_week = '🅂 🄼 🅃 🅆 🅃 🄵 🅂'.split(' ');

const getMonthDays = (year, month) => {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);
  return (end - start) / (1000 * 60 * 60 * 24);
}

const getMonthFirst = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
}

const getDayGroup = (year, month) => {
  const a = getMonthFirst(year, month);
  const b = getMonthDays(year, month);
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

export default {
  data() {
    return {
      sWeek: str_week,
      isNow: true,
      now: null,
      dayGroup: null,
      nYear: null,
      nMonth: null,
    };
  },
  mounted() {
    const now = getCurrentTime();
    this.now = now;
    this.dayGroup = getDayGroup(now.year, now.month);
    this.nYear = now.year;
    this.nMonth = now.month;
  },
  methods: {
    getPrev(type) {
      if (type === 'Y') {
        this.nYear = this.nYear - 1;
      } else {
        if (this.nMonth <= 1) {
          this.nYear = this.nYear - 1;
          this.nMonth = 12;
        } else {
          this.nMonth = this.nMonth - 1;
        }
      }
      this.setNow();
      this.dayGroup = getDayGroup(this.nYear, this.nMonth);
    },
    getNext(type) {
      if (type === 'Y') {
        this.nYear = this.nYear + 1;
      } else {
        if (this.nMonth >= 12) {
          this.nYear = this.nYear + 1;
          this.nMonth = 1;
        } else {
          this.nMonth = this.nMonth + 1;
        }
      }
      this.setNow();
      this.dayGroup = getDayGroup(this.nYear, this.nMonth);
    },
    getNow() {
      const now = this.now;
      this.nYear = now.year;
      this.nMonth = now.month;
      this.dayGroup = getDayGroup(now.year, now.month);
      this.isNow = true;
    },
    setNow() {
      const now = this.now;
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
  width: 24px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  background: #eee;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  color: #3eaf7c;
  vertical-align: middle;
}
.btns .ybtn {
  width: 30px;
  font-size: 14px;
  letter-spacing: -5px;
  text-indent: -5px;
}
.btns .now_btn {
  width: 72px;
  color: #000;
  background: #eee;
  font-size: 12px;
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
  display: inline-block;
  font-size: 24px;
  color: #3eaf7c;
  background: transparent;
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