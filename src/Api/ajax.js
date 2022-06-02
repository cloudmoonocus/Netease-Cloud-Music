import axios from 'axios';

// 引入nprogress进度条
import nprogress from 'nprogress';
// start：进度条开始 --> request
// done：进度条结束 --> response
// 引入进度条的样式
import 'nprogress/nprogress.css';

import store from '@/store';

// 使用axios对象的方法create，创建一个axios实例
// request就是axios，只是增加了配置
const requests = axios.create({
    // 配置对象
    // 基础路径（服务器路径都有/api，加上之后不用每次都输入）
    baseURL: '/api',
    // 请求超时的时间（毫秒）
    timeout: 5000,
});

// 请求拦截器 ：发送之前检测到，以便于处理一些业务
requests.interceptors.request.use((config) => {
    nprogress.start();
    // config是配置对象，对象中有个属性很重要：header请求头
    // 携带token向服务器索取数据
    if (store.state.login.token) {
        config.headers.token = store.state.login.token;
    }
    return config;
});

// 响应拦截器 ：服务器发送数据后，响应拦截器可处理一些业务
requests.interceptors.response.use(
    (res) => {
        nprogress.done();
        // 响应成功的回调函数
        return res.data;
    },
    (error) => {
        // 响应失败的回调函数
        return Promise.reject(new Error('faile'));
    }
);

// 暴露
export default requests;
