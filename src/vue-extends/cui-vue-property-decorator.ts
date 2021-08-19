import _ from 'lodash';
import Component from 'vue-class-component';

function _getMinxinKey(after?: boolean) {
  return ['_sip_mixins', after === true ? '1' : '0'].join('_');
}

function _makeMixins(mixins, outMixns: any[]) {
  _.each(mixins, function (item) {
    outMixns.push(item);
    if (item.mixins) {
      _makeMixins(item.mixins.slice().reverse(), outMixns);
    }
  });
}


