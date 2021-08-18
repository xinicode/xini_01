<template>
  <div style="width: 500px; margin: 300px auto">
    <div>12312a</div>
    <Button id="btn" @click="destory">测试按钮</Button>
    <Button id="btn" @click="testBtn">测试按钮</Button>
    <Button id="btn" @click="link">测试按钮</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CVue } from "../bootstrap/Cvue";
import _ from "lodash";
import { CTooler } from "@/util/tools";
import dayjs from 'dayjs';

@Component
export default class Main extends CVue {
  destory() {
     let url = '10.201.16.55?t=5';
     let query = {
       a:123, deply:3
     }
     url = CTooler.setQueryString(url,query);
     console.log(url)
  

  }
  testBtn() {
    this.$Message.info("This is a info tip");
  }

  link() {
    this.$router.push({ path: "./about" });
  }

  func() {
    var count = 9;
    return function () {
      count++;
      console.log(count);
    };
  }

  mounted() {
    // 节流
    function throttle(fn, deply) {
      var timer = 0;
      return function () {
        var nowTime = Date.now();
        if (nowTime - timer > deply) {
          fn.call(this);
          timer = nowTime;
        }
      };
    }
    //防抖
    function debounce(fn, deply) {
      var timer = 0;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.myApply(this);
        }, deply);
      };
    }
  }
}
</script>
