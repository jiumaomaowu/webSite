import * as axios from 'axios'
// 全局设定请求类型
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 根据 axios api，对请求返回做拦截处理
axios.interceptors.response.use(function (response) {
  if (response.status >= 400 && response.status < 500) {
      // 对返回状态码为 4xx 的请求统一处理
      // 此处统一跳转 404 页面
      window.location.href = decodeURI(`${window.location.protocol}//${window.location.host}/404.html`)
  } else {
    return response
  }
}, function (error) {
  proxyUtil.alertMessage(error)
})

export function pget (url, params = {}) {
    // 开始 loading
   
    return axios.get(url, {
      params: params,
      validateStatus: function (status) {
        // axios 底层采用 Promise 实现，下方表达式表示只有返回 code 为 2xx 才被正常返回（resolve），非 2xx 全部当做异常（reject）
        return status >= 200 && status < 300
      }
    }).then(response => {
      // 结束 loading
     
      // 返回后端返回数据
      return response.data
    }).catch(error => {
      // 异常处理
     
    })
  }


export function ppost (url, params = {}) {
  // 开始 loading
 
  return axios.post(url, params).then(response => {
    // 结束 loading
   
    return response.data
  }).catch(error => {
    // 异常处理
  
  })
}