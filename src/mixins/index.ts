import { LayoutMixin } from "@/components/layout.mixin";

import Vue from "vue";
import { Component } from "vue-property-decorator";




@Component({
  mixins: [LayoutMixin]
})
export default class mixins extends Vue {


}