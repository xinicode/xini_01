import { Component } from "vue-property-decorator";
import CmpPage from "@/vue-extends/cmp-page";




@Component
export default class Main extends CmpPage {




  created() {
    console.log('this.$route.query.a: ', this.$route.query);
  }


}