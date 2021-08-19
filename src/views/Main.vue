<template>
  <cmp-page>
    
    <cmp-page-header> 123123 </cmp-page-header>

    <cmp-body>
      <div style="width: 500px; margin: 300px auto">
        <div>12312a</div>
        <Button id="btn" @click="testBtn">测试按钮</Button>
        <Button id="btn" @click="link">测试按钮</Button>
      </div>
    </cmp-body>

  </cmp-page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CmpVue } from "../bootstrap/cmp-vue";
import _ from "lodash";
import { CTooler } from "@/util/tools";

import CmpPage from "@/vue-extends/cmp-page";
import dayjs from "dayjs";

@Component
export default class Main extends CmpPage {
  go(url, params) {}

  created() {}
  testBtn() {
    this.$open("./about", { a: 123 });
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
