// 该文件的作用：统一管理API
import requests from './ajax';

export const reqCategoryList = () => {
    // axios发请求，返回Promise对象
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
};

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });
