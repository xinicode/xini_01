
import CmpPage from "@/vue-extends/cmp-page";
import { Component } from "vue-property-decorator";


@Component
export default class Main extends CmpPage {
  go(url, params) { }

  created() { }
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
