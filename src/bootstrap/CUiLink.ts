import _ from 'lodash';
import { CTooler } from '../tools';

import { CVue } from './Cvue';

function _getQueryId() {
  return ~~CTooler.getHashQueryString(location + '', '_L');
}

let _id = _getQueryId();

function _getId() {
  if (_id > 9999) _id = 0;
  return ++_id;
}

export class CUIlLink {
  fullPath: string;
  constructor(private _opener?: any, private _page?: any, private _openBy?: any) {
    if (_openBy) this._opener = null;
    this.id = _openBy ? _getQueryId() : _getId();
    if (this._opener) this.fullPath = this._opener?.$route?.fullPath || '';
  }

  readonly id: number;

  setPage(page: any) {
    this._page = page;
  }

  setOpener(opener: any) {
    if (!this._openBy)
      this._opener = opener;
  }

}