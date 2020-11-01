<template>
  <div class="say">
    <div class="text">{{text}}</div>
    <div class="author"><i class="line">——</i> <em>{{name}}</em></div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
  },
}
</script>

<style lang="postcss" scoped>
.say {
  box-shadow: inset 0 0 15px #84a59d;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #4a4a4a;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 2px;
}

.line {
  letter-spacing: 0;
}
.author {
  margin-top: 5px;
  text-align: right;
  font-size: 12px;
}
</style>