import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import _ from 'lodash';

import Vue from '@/main';

const getTokenByLocal = () => {
  const token = sessionStorage.getItem('token');
  return token;
};


const service = axios.create({
  baseURL: '/',
  timeout: 5000
})

// //请求拦截
service.interceptors.request.use(
  config => {
    if (getTokenByLocal()) {
      config.headers['token'] = getTokenByLocal();
    } else {
      Vue.$router.push({ path: '/login' });
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code == '200') {
      // Vue.$Message.success('登录成功');
    }
    if (res.code == '401') {
      Vue.$Message.warning('未登录');
      // Vue.$router.push({ path: '/login' });
    }
    if (res.code == '500') {
      Vue.$Message.warning(res.msg);
      return Promise.resolve(false);
    }
    return Promise.resolve(res);
  },
  error => {
    return Promise.reject(error)
  }
)

export interface CmpHttpStatusInfo {
  code: 'ok' | 'warning' | 'error';
  message?: string;
  showType?: 'message' | 'notify'
}

export interface CmpHttpResult<T = any> {
  /**数据 */
  data: T;
  /**是否成功 */
  isSucc: boolean;
  /** 已过时，请不要使用； 是否 成功 或 Warn */
  isSuccOrWarn: boolean;
  /**是否warn */
  isWarn: boolean;
  /**提示信息 */
  message: string;
  /**状态码 */
  status: number;
  /** status-info */
  statusInfo?: CmpHttpStatusInfo;
  /** 记录数 */
  total?: number;
  /**状态信息 */
  statusText: string;
  /**后台出错信息 */
  error: string;
  config?: CmpHttpConfig;
  url?: string;
  /** 更详情信息 */
  errorEx?: ''
}

interface CmpHttpConfig extends AxiosRequestConfig {
  /** 自定义interceptor */
  interceptor?(response: AxiosResponse<any>, err: any, config: CmpHttpConfig): CmpHttpResult<any>;
}

interface ICmpHttpConfig {
  /** http 拦截器 */
  interceptor?(response: AxiosResponse<any>, error?: any): Promise<any>;
  /**统一处理url路径 */
  handleUrl?(url: string): string;
  /**统一处理config数据 */
  handleConfig?(config: CmpHttpConfig): CmpHttpConfig;
  /**定义rest结果提示信息 */
  message?: {
    success: string;
    warn: boolean;
    error: boolean;
  };
  /**定义rest结果提示通知 */
  notifis?: {
    success: boolean;
    warn: boolean;
    error: boolean;
  };
  /**
   * 统一处理成功的response
   * @param response
   */
  handleResult?<T = any>(url?: string, config?: CmpHttpConfig): (response: AxiosResponse<T>) => CmpHttpResult<T>;
  /**
   * 统一处理打败的response
   * @param response
   */
  handleErrorResult?<T = any>(url?: string, config?: CmpHttpConfig): (reason: AxiosError) => CmpHttpResult<T>;
  makeFormData?(data: any, config: CmpHttpConfig): any;
  serializeResult?(rs: CmpHttpResult<any>): CmpHttpResult<any>;
  deserializeResult?(rs: CmpHttpResult<any>): CmpHttpResult<any>;
  assign?(config: ICmpHttpConfig): void;
  bootstraps?(config: ICmpHttpConfig);
}



export default service;
