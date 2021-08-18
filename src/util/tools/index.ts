
import querystring from 'querystring';
import _ from 'lodash';
import dayjs from 'dayjs';
import { CTCookie } from '../config/cookie'
import { CTStorage } from '../config/storage'

/**
 * 返回#后面的字符串
 * @param url 
 * @returns 
 */
 function _queryString(url: string): string[] {
  let [newUrl, ...hash] = url ? url.split('#') : ['', ''];
  return [hash.join('#'), ...newUrl.split('?')];
}

let core_hasOwn = Object.prototype.hasOwnProperty;



let _tick: number = 0;


export class CTooler {

  /** 
   * 时间设置 YYYY-MM-DD
  */
  static get dayjs() {
    return dayjs;
  }

  /**
   * cookie 设置 查看 
   * all set get
   */
  static get cookie() {
    return CTCookie;
  }

  /** 
   * 本地存储
  */
  static get localStorage() {
    return CTStorage;
  }

  /**
   * 根据时间生成唯一字段
   * @returns string
   */
  static makeAutoId() {
    let t = new Date().valueOf();
    if ((++_tick) > 100000) _tick = 0;
    return [t, _tick].join('_');
  }

  static setQueryString(url: string, p: object, json?: boolean, useToHttp?: boolean): string {
    if (!p) return url;
    let [hash, href, queryStr] = _queryString(url || '');
    let query = this.queryParse(queryStr);
    CTooler.eachProp(p, function (item, name) {
      item || (item = '');
      query[name] = json === true && (_.isArray(item) || _.isObject(item)) ? JSON.stringify(item) : item
    });
    let queryStringify = this.queryStringify(query, useToHttp);
    let toUrl = !queryStringify ? href : [href, queryStringify].join('?');
    if (hash) toUrl = [toUrl, hash].join('#');
    return toUrl;
  }


  static eachProp(obj: any, callback: (item: any, name: string) => void, thisArg: any = null) {
    if (!obj) return;
    var item;
    for (var n in obj) {
      if (CTooler.hasOwnProp(obj, n)) {
        item = obj[n];
        if (callback.call(thisArg, item, n) === false) break;
      }
    }
  }

  /**
   * 获取url hash query 如果name为空返回query部分
   * @param url 
   * @param name 
   * @returns 
   */
  static getHashQueryString(url: string, name?: string): string {
    if (!url) return '';
    url = CTooler.getUrlHash(url);
    let [hash, href, queryStr] = _queryString(url);
    if (!name) return queryStr || '';
    let query: object = CTooler.queryParse(queryStr);
    return query[name] || '';
  }
  /**
   * 获取url hash部分
   * @param url 
   * @returns 
   */
  static getUrlHash(url: string): string {
    let [hash] = _queryString(url);
    return _.trim(hash)
  }
  /**
   * 
   * @param query 
   * @returns 
   */
  static queryParse(query: string): object {
    return (query && querystring.parse(query)) || {};
  }

  /**
   * 获取url路径
   * @param url 
   * @returns 
   */
  static getUrlPart(url: string) {
    let [href] = _queryString(url);
    return _.trim(href);
  }


  /**
   * 是否绝对路径
   * @param url 
   * @returns 
   */
  static isAbsoluteUrl(url: string): boolean {
    return /^[^\/]+\:\/\/|^\//.test(url);
  }

  /**
   * 检查对象是否存在特定属性
   * @param obj 
   * @param prop 
   * @returns 
   */
  static hasOwnProp(obj: any, prop: string): boolean {
    return core_hasOwn.call(obj, prop)
  }



  /**
   * 
   * @param query 
   * @param useToHttp 是否用户http encode会不一样 默认为false
   * @returns 
   */
  static queryStringify(query: any, useToHttp?: boolean): string {
    let str = (query && querystring.stringify(query)) || '';
    return useToHttp === true ? str.replace(/\%2B|\%20/g, '+').replace(/\%2C/g, ',') : str;
  }










  /**
   * 安全操作符
   * @param fn 
   * @param safeValue 
   * @returns 
   */
  static safeOperator(fn: () => any, safeValue?: any) {
    try {
      return fn();
    } catch (e) {
      return safeValue
    }
  }















}