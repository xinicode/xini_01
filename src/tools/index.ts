
import querystring from 'querystring';
import _ from 'lodash';


function _queryString(url: string): string[] {
  let [newUrl, ...hash] = url ? url.split('#') : ['', ''];

  return [hash.join('#'), ''];
}



export class CTooler {




  static getHashQueryString(url: string, name?: string): string {
    if (!url) return '';
    url = CTooler.getUrlHash(url);
    let [hash, href, queryStr] = _queryString(url);
    if (!name) return queryStr || '';
    let query: object = CTooler.queryParse(queryStr);
    return query[name] || '';
  }

  static getUrlHash(url: string): string {
    let [hash, href, queryStr] = _queryString(url);
    return _.trim(hash)
  }

  static queryParse(query: string): object {
    return (query && querystring.parse(query)) || {};
  }

  static safeOperator(fn: () => any, safeValue?: any) {
    try {
      return fn();
    } catch (e) {
      return safeValue
    }
  }
}