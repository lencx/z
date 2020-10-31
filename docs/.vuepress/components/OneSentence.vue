<template>
  <div class="one-sentence">
    <div class="text">{{text}}</div>
    <div class="author"><em>——{{name}}</em></div>
  </div>
</template>

<script>
import oneSentenceData from './data.ts';

function range(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function fmtData(data = []) {
  let arr = [];
  data.map(i => {
    i.list.map(j => arr.push({ name: i.name, text: j }));
  });
  return arr;
}

const result = fmtData(oneSentenceData);
const index = range(0, result.length);
const currData = result[index] || {};

export default {
  data() {
    return {
      name: currData.name,
      text: currData.text,
    };
  }
}
</script>

<style lang="postcss" scoped>
.one-sentence {
  background-color: #eee;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 16px;
}
.author {
  margin-top: 5px;
  text-align: right;
  font-size: 14px;
}
</style>