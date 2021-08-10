<template>
  <div style="width: 500px; margin: 300px auto">

      <div>
        12312a
      </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {
    

  created() {
    console.log(this.$cuihao)


      this.$cuihao.open("./login",'123123')





  }
















}
</script>
