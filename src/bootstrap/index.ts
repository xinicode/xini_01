import _ from 'lodash';



export const bts = {

  $open(localtion, query?, option?) {
    option = _.assign({ opener: this, main: false }, option);
    let opener: any = option.opener;
    let link = {}
    // let link: CUIlLink = CVue.$open(location, query, option);
    // option.openBy || link.setOpener(opener);
    // link.setPage(this);
    return link;


  }


}