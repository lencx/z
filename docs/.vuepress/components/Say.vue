<template>
  <div class="say">
    <div class="text">{{text}}</div>
    <div class="author">—— <em>{{name}}</em></div>
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
  border: dashed 3px #84a59d;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: #666;
}
.author {
  margin-top: 5px;
  text-align: right;
  font-size: 12px;
}
</style>