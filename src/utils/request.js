import config from './../config'
import axios from 'axios'
import router from '../router'
import store from '../store'
import { ElMessage } from 'element-plus'

const TONKEN_INVALID = "token过期"
const NETWORK_ERROR = "网络错误"

//创建axios实例 添加全局配置
const service = axios.create({
    baseUrl: config.baseUrl,
    timeout: 4000
})
//请求拦截
service.interceptors.request.use((req) => {
    //tood
    const headers = req.headers

    // token 
    const token = 'token'
    headers.Authorization = 'Bearer ' + token
    return req
})

//响应拦截
service.interceptors.response.use((res) => {
    const { code, data, msg } = res.data
    if (code === 200) {
        return data
    } else if (code === 50001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})
/**
 * 请求核心函数
 */
function request(options) {
    options.method = options.method || 'get'
    if(options.method==='get'){
        options.params=options.data
    }
    let isMock = config.mock
    if (typeof options.mock != 'undefined') {
        isMock = options.mock
    }
    if (config.env === 'prod') {
        //生产环境
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(options)
}
['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request