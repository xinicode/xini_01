import _ from "lodash";

let _docCookie;
let _docCookieObject = {};

/**
 * cookie 管理
 */
export class CTCookie {

  /** 所有cookice内容，Object */
  static get all(): any {
    if (_docCookie == document.cookie) return _.assign({}, _docCookieObject);
    const cookie = document.cookie;
    if (!cookie) return {};
    _docCookie = cookie
    const cookieList = cookie.split(';');
    _docCookieObject = {};
    _.forEach(cookieList, function (item) {
      const [cName, cValue] = item.split('=');
      _docCookieObject[_.trim(cName)] = cValue;
    });
    return _.assign({}, _docCookieObject);
  }

  static get(name: string): string {
    return CTCookie.all[name];
  }

  static set(name: string, value: string, opt?: {
    /** 如: / */
    path?: string;
    /** 如：sub.example.com */
    domain?: string;
    /** 只能https用？ */
    secure?: boolean;
    httponly?: boolean;
    /** 过期时间, 单位秒 */
    expires?: number
  }): string {
    if (value && value.indexOf(';') >= 0) {
      throw new Error('cookie 内容不能包涵";"字符');
    }

    const cookie = [`${name}=${_.isNil(value) ? '' : value}`];
    if (opt) {
      if (opt.domain) cookie.push(`domain=${opt.domain}`);
      if (opt.path) cookie.push(`path=${opt.path}`);
      if (opt.secure) cookie.push('secure');
      if (opt.httponly) cookie.push('httponly');
      const expires = ~~opt.expires;
      if (expires > 0) {
        const date = new Date();
        date.setSeconds(date.getSeconds() + expires);
        cookie.push(`expires=${date.toUTCString()}`);
      }
    }
    document.cookie = cookie.join(';');
    return document.cookie;
  }

  static remove(name: string) {
    document.cookie = `${name}=;expires=${new Date().toUTCString()}`;
    return document.cookie;
  }

}


console.log('cookie', document.cookie);
console.log('test', CTCookie.get('test'));
CTCookie.set('test', '1111');
CTCookie.set('test1', '1111');
console.log('cookie', document.cookie);
console.log('test', CTCookie.get('test'));
CTCookie.remove('test');
console.log('cookie', document.cookie);
console.log('test', CTCookie.get('test'));