<template>
  <div class="intro_card">
    <a class="intro_body" :href="link">
      <img class="avatar" :src="avatar" />
      <div class="info">
        <h4 class="name">{{name}}</h4>
        <div class="desc">{{desc}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    link: String,
    avatar: String,
    desc: String,
  },
}
</script>

<style lang="postcss" scoped>
.intro_card {
  margin: 10px;
  display: inline-block;
  max-width: 340px;
}
.intro_body {
  display: flex;
  padding: 20px 30px;
  color: #333;
  border-radius: 5px;
  align-items: center;
  text-decoration: none !important;
  transition: box-shadow 500ms ease;
  border: solid 1px #d2d2d2;
}
.intro_body:hover {
  box-shadow: 0 0 5px #84a59d;
  transition: box-shadow 500ms ease;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 20px;
  box-shadow: 0 0 2px #000;
}
.name {
  font-size: 16px;
  margin: 0 0 10px;
  font-weight: bold;
}
.desc {
  font-size: 12px;
  color: #999;
  line-height: 1.2;
}
</style>