import CmpPageBodyComponent from "./common/cmp-page-body.component.vue";
import CmpPageHeader from "./common/cmp-page-header.component.vue";
import CmpPage from "./common/cmp-page.component.vue";
import LayoutMenu from "./common/layoutMenu.vue";
import LayoutMenu2 from "./common/layoutMenu2.vue";

export const LayoutMixin = {
  components: {
    'X-MenuLeft': LayoutMenu,
    'X-MenuLeft2': LayoutMenu2,
    'cmp-page-header': CmpPageHeader,
    'cmp-page': CmpPage,
    'cmp-body': CmpPageBodyComponent,
  }





}