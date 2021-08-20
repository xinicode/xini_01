import Vue from 'vue'
import _ from 'lodash';
import { CTooler } from '@/util/tools';
import service from '../request/service';


function _getThemeByRoute(route) {
  return CTooler.safeOperator(function () { return route.matched[0].meta.cmpTheme; }, '');
}

declare module 'vue/types/vue' {
  interface Vue {
    $open(location, query?, option?);
    $rest(url, query?);
  }
}



_.assign(Vue.prototype, {
  $open(location, query, option) {
    option = _.assign({ main: true, opener: this }, option);
    // if(!option.theme){
    //   option.theme = _getThemeByRoute(this.$route);
    // }
    return CmpVue.$open(location, query, option)
  },
  $rest(url,query){
    return CmpVue.$rest(url,query);
  }
})


export function CmpCreateLink(opener?: any, page?: any, openBy?: any) {



}


export class CmpVue extends Vue {
  static home: any;

  static openMode: 'child' | 'openBy' | 'main' = 'main';

  static $open(location, query?, option?) {
    console.log(query)
    // this.$router.push(location)

  }

  static $rest(url, query?): Promise<any> {
    return service.post(url, query)
  }


}
