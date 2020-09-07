import axios from 'axios';

//第一种方法用Promise
export const axiosAutoRequest = (obj, vm) => {
    return new Promise((resovle, reject) => {
        const instance = axios.create({
            baseUrl: 'http://123.23.23',
            timeout: 5000 //接口请求的超时时间
        });
        // let config = { //config可以和obj合并
        //     method: 'post', //get,put,delete,options,header
        //     headers: {'Content-type': 'application/x-www-form-urlencoded'}
        // };

        //axios提供了求情拦截,如下
        instance.interceptors.request.use(obj => {
            console.log('来到了request请求拦截success中');
            return obj;  //操作完后要ruturn回去结果，要不然不会执行下面的代码
        }, err => {
            console.log('来到了request请求拦截failure中');
            return err; 
        })
        // 响应拦截
        instance.interceptors.response.use(response => {
            console.log('来到了response响应拦截success中');
            return response.data;  //操作完后要ruturn回去结果，要不然不会执行下面的代码
        }, err => {
            console.log('来到了response请求拦截failure中');
            return err; 
        })
        //返回结果
        instance(obj).then((res) => {
            resovle(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

//第二种方法axios自带了axios().then().catch()方法
export const axiosRequest = ({url, data = {}, method = 'post', params = {}}) => {
        let config = {
            url,
            data,
            method, 
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        };
        const instance = axios.create({
            baseUrl: 'http://123.23.23',
            timeout: 5000 //接口请求的超时时间
        });
        //axios响应拦截处理
        instance.interceptors.request.use(obj => {
            console.log('来到了request请求拦截success中');
            return obj;  //操作完后要ruturn回去结果，要不然不会执行下面的代码
        }, err => {
            console.log('来到了request请求拦截failure中');
            return err; 
        })
        // 响应拦截
        instance.interceptors.response.use(response => {
            console.log('来到了response响应拦截success中');
            return response.data;  //操作完后要ruturn回去结果，要不然不会执行下面的代码
        }, err => {
            console.log('来到了response请求拦截failure中');
            return err; 
        })
       return instance(config);
}