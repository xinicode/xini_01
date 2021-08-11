<template>
  <div style="width: 500px; margin: 300px auto">
    <div>12312a</div>
    <Button @click="testBtn">测试按钮</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CVue } from "../bootstrap/Cvue";

@Component
export default class Main extends CVue {
  mounted() {
    this.$open("./login")
  }

  testBtn(){
    console.log("aa")
  }





}
</script>
