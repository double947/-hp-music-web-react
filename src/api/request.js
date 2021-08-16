import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

function httpService(option) {
  return new Promise((resolve, reject) => {
    // 创建axios实例
    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT
    });
    
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    
      // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    
      // 3.option/data序列化的操作
    
      return config;
    }, error => {
      return error
    });
    
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // 请求成功隐藏loading
      return res.data;
    }, error => {
      console.log('来到了response拦截failure中');
      console.log(error);
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            console.log("请求错误");
            break;
          case 401:
            console.log("未授权访问");
            break;
          default:
            console.log("其他错误信息");
        }
      }
      return error;
    });

    // 传入对象进行网络请求
    instance(option).then((res) => {
      resolve(res)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default httpService;

