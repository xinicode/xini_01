import service from "./service";


interface CmpHttpConfig {
  code: number;
  data: any
}

let requestPost = (url, query):Promise<CmpHttpConfig> => {
  return service.post(url, query)
}

let requestGet = (url, query) => {
  return service.get(url, query)
}

export { requestPost, requestGet };