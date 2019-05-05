/**
 * Created by f on 2018/4/27.
 */
import axios, { AxiosRequestConfig } from 'axios'
import apiconfig from '../../config'
let ax = axios.create()

ax.interceptors.request.use(async (config) => {
  config.baseURL = apiconfig.api.serverRunPort
  config.headers = config.headers || {}
  config.headers['Content-Type'] = 'application/json'
  await addTokenToHeader(config).then((data: any) => {
    config.headers['Access-Token'] = data
  })
  config.timeout = apiconfig.api.timeout
  return config
})

ax.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

function addTokenToHeader (config: any) {
  return new Promise((resolve, reject) => {
    // resolve(store().getters.getAccessToken());
    resolve('sdjkjsjdkfjkdfhs')
  })
}

export default ax
