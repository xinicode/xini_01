import _ from 'lodash';

export const bts = {
  open(location, query?, option?) {

    option = _.assign({ opener: this, main: false }, option)

    let opener:any = option.opener;
    let link = "";
    option.openBy || link.setOpener(opener);
    link.setPage(this);
    return link;
  }









}