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
  width: 340px;
}
@media screen and (max-width: 720px) {
  .intro_card {
    width: 100%;
    margin: 5px 0;
  }
}
.intro_body {
  display: flex;
  padding: 20px 16px;
  color: #333;
  border-radius: 5px;
  align-items: center;
  text-decoration: none !important;
  transition: box-shadow 200ms ease-in-out;
  border: solid 1px #d2d2d2;
  box-shadow: 0 2px 2px #eee;
}
.intro_body:hover {
  box-shadow: 0 5px 5px #ccc;
  transition: box-shadow 200ms ease-in-out;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0 0 3px #999;
  pointer-events: none;
  border: solid 2px #fff;
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