
import CmpPage from "@/vue-extends/cmp-page";
import { Component } from "vue-property-decorator";
import { postRequest } from "../request/api";


@Component
export default class Main extends CmpPage {



  getList() {
    this.$rest('/sys/getClassmates').then((rs) => {
      console.log(rs)
      // if(rs.code == '200') return;
      // let datas = rs.data;

    })
  }


  go(url, params) { }

  created() {
    this.getList()
  }
  testBtn() {
    this.$router.push({ name: "/about", params: { userId: true } });
  }

  link() {
    this.$router.push({ path: "./about", query: { userId: true } });
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
