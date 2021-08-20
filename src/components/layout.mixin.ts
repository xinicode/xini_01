import CmpPageBodyComponent from "./common/cmp-page-body.component.vue";
import CmpPageHeader from "./common/cmp-page-header.component.vue";
import CmpPage from "./common/cmp-page.component.vue";

export const LayoutMixin = {
  components: {
    'cmp-page-header': CmpPageHeader,
    'cmp-page': CmpPage,
    'cmp-page-body': CmpPageBodyComponent,
  }





}