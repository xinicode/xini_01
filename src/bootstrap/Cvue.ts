import Vue from 'vue'
import _ from 'lodash';
import { CTooler } from '../tools';


function _getThemeByRoute(route) {
  return CTooler.safeOperator(function () { return route.matched[0].meta.cmpTheme; }, '');
}


_.assign(Vue.prototype, {
  $open(location, query, option) {
    option = _.assign({ main: true, opener: this }, option);
    // if(!option.theme){
    //   option.theme = _getThemeByRoute(this.$route);
    // }
    return CVue.$open(location, query, option)
  }
})


declare module 'vue/types/vue' {
  interface Vue {    
    $open(location, query?, option?);
  }
}



export class CVue extends Vue {
  static home: any;

  static $open(location, query?, option?) {
    console.log(location)
    let fullPath = '';
    let id = 1;
    let timeOut = '';

    return {};
  }
}