//直接引入
import axios from 'axios'

//因为axios默认发的是json格式数据，我们要做表单提交，需要更改axios配置
// 引入 Qs是为了把json格式，转为formdata 的数据格式
const service = axios.create({
    baseURL: 'http://localhost:8008',
    timeout: 1000,
    header: {'Content-Type':'application/json'},
});

/*拦截器*/
service.interceptors.request.use(function (config){
    config.headers.authorization = window.localStorage.getItem("authorization")
    return config
})

export default service;
