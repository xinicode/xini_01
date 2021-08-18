import _ from "lodash";

const _cacheKey = 'cmp-storage-201222';
const _sortKey = 'cmp-storage-sort-201222';

let _sortKeyList = [];

//尽量使用 get/setItem

export class StorageClass {

  constructor() {
    this._load();
    const fn = () => {
      window.removeEventListener('beforeunload', fn);
      this.save();
    };
    window.addEventListener('beforeunload', fn);
  }

  private _load() {
    let datas = localStorage[_cacheKey];
    if (datas) {
      datas = JSON.parse(datas);
      _.forEach(datas, (value, key) => {
        this[key] = value;
      });
    };
    this.sortKey = JSON.parse(localStorage[_sortKey] || '[]');
    this._resetSortKeys();
  }

  /** 立即保存数据到 localStorage */
  save() {
    if (this._saveTime['tid']) clearTimeout(this._saveTime['tid']);
    this._saveTime['tid'] = null;
    try {
      localStorage[_cacheKey] = JSON.stringify(this.cache);
      this._resetSortKeys();
      localStorage[_sortKey] = JSON.stringify(this.sortKey);
    } catch (e) {
      const sortKey = this.sortKey || [];
      if (sortKey.length == 0) return;
      this.clearBy(5, false);
      this.save();
    }
  }

  /** 重算 sort key */
  private _resetSortKeys() {
    const keys = _.difference(this.allKeys, this.sortKey);
    this.sortKey = keys.concat(this.sortKey);
  }

  /** 数据大小 */
  get size():number {
    return localStorage[_cacheKey]?.length || 0;
  }

  private _saveTime() {
    if (this._saveTime['tid']) return;
    this._saveTime['tid'] = setTimeout(() => {
      this.save();
    }, 1);
  }

  /** key 个数 */
  get length() {
    return this.allKeys.length;
  }

  hasItem(key: string) {
    return _.has(this, key);
  }

  getItem(key: string) {
    return this[key];
  }

  /**
   * 设置 item 内容，如果存储满时会自动清除最老数据
   * @param key 如果 key 使用$前缀不会自动清除
   * @param value 
   */
  setItem(key: string, value: any) {
    this._removeSortKey(key);
    this.sortKey.unshift(key);
    this._saveTime();
    return this[key] = value;
  }

  removeItem(key: string) {
    this[key] = undefined;
    delete this[key];
    this._removeSortKey(key);
    this._saveTime();
  }

  private _removeSortKey(key: string) {
    this.sortKey = _.filter(this.sortKey, function (item) { return item != key; });
  }

  get sortKey(): string[] {
    return _sortKeyList;
  }
  set sortKey(p: string[]) {
    _sortKeyList = p;
  }

  /**
   * 清除所有内容
   * @param all 所有数据（包括以$前缀的key），默认为true
   */
  clear(all = true) {
    this.forEach((key) => {
      if (!all && key.indexOf('$') == 0) return;
      this.removeItem(key);
    });
    all && (this.sortKey = []);
    this._saveTime();
  }

  /**
   * 清除最先（旧）缓存数据
   * @param num 数量
   * @param all 所有数据（包括以$前缀的key），默认为true
   */
  clearBy(num: number, all = true) {
    this._resetSortKeys();
    const keys: any[] = this.sortKey.slice().reverse();
    let cn = 0;
    _.forEach(keys, (key) => {
      if (!all && key.indexOf('$') == 0) return;
      if (cn == num) return false;
      cn++;
      this.removeItem(key)
    });
    this._saveTime();
  }

  /**
   * 获取key
   * @param index 
   */
  key(index: number) {
    return this.sortKey[index];
  }

  /** 获取所有缓存 keys，只读 */
  get allKeys() {
    return Object.keys(this);
    // return _.filter(Object.keys(this), function (key) {
    //   return !_.includes([''], key);
    // });
  }

  /** 获取所有缓存，只读 */
  get cache() {
    const cache = {};
    this.forEach(function (key, value) {
      cache[key] = value;
    });
    return cache;
  }

  /**
   * 遍历所有缓存
   * @param fn 
   */
  forEach(fn: (key: string, value: any, storage: StorageClass) => void | false) {
    if (!fn) return;
    _.forEach(this.allKeys, (key) => {
      return fn.call(this, key, this[key], this);
    });
  }

}

export const CTStorage = new StorageClass();
