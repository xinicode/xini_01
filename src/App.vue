<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
};
</script>
<style>
body {
  margin: 0px;
  padding: 0px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px !important;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
</style>