


import { requestPost } from './common';


export function postRequest(url: string, data?: any) {
  return new Promise((resovle, reject) => {
    requestPost(url, data).then(res => resovle(res))
      .catch(error => reject(error))
  })
}