import axios from 'axios'
 
const $http = axios.create({
    baseURL: '',
    timeout: 1000,
})

//请求拦截器 

$http.interceptors.request.use(function (config) {
    // 在发送请求之前
    config.headers.token = '123421'
    return config
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截器
$http.interceptors.response.use(function (response) {
    let data = response.data
    return data;
}, function(error) {
    return Promise.reject(error)
})

export default $http