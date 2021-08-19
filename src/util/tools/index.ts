
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
    _.forEach(p, function (item, name) {
      item || (item = '');
      query[name] = json === true && (_.isArray(item) || _.isObject(item)) ? JSON.stringify(item) : item
    });
    let queryStringify = this.queryStringify(query, useToHttp);
    let toUrl = !queryStringify ? href : [href, queryStringify].join('?');
    if (hash) toUrl = [toUrl, hash].join('#');
    return toUrl;
  }


  static queryString(item) {
    let str: any = CTooler.getQueryString((window.location + ""), item);
    return _.isEmpty(str) ? str : decodeURIComponent(str);
  }

  static getQueryString(url, name?: string) {
    if (!url) return '';
    let [hash, href, queryStr] = _queryString(url);
    if (!name) return queryStr || '';
    let query: object = CTooler.queryParse(queryStr);
    return query[name] || '';
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


  static encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
      res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
  }


  static decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
  }


  static _getDateString(timeStr) {
    return _.isNull(timeStr) ? timeStr : timeStr.indexOf('T') ? timeStr.split(' ')[0] : timeStr.split('T')[0];
  }


  static getDateDiff(timeStr) {
    if (!timeStr) return '';
    var _dateTimeReg = /(\d+)\-(\d+)\-(\d+)\s*(?:(\d+)\:(\d+)(?:\:(\d+))*)*/;
    var now = new Date().getTime(),
      dateRegs = _dateTimeReg.exec(timeStr),
      hisTimeDate = dateRegs ? new Date(~~dateRegs[1], ~~dateRegs[2] - 1, ~~dateRegs[3], ~~dateRegs[4], ~~dateRegs[5], ~~dateRegs[6]).getTime() : now,
      diffValue = now - hisTimeDate,
      arg = arguments,
      result = '',
      minute = 1000 * 60,
      hour = minute * 60,
      day = hour * 24,
      halfamonth = day * 15,
      month = day * 30,
      year = month * 12,

      _year = diffValue / year,
      _month = diffValue / month,
      _week = diffValue / (7 * day),
      _day = diffValue / day,
      _hour: any = diffValue / hour,
      _min: any = diffValue / minute;
    if (_year >= 1 || _month >= 1 || _week >= 1 || _day >= 1) {
      result = CTooler._getDateString(timeStr)
    }
    else if (_hour >= 1) result = parseInt(_hour) + "小时前";
    else if (_min >= 1) result = parseInt(_min) + "分钟前";
    else result = "刚刚";
    return result;
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