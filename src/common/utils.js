export const deepcopy = (obj1, obj2) => {
    obj2 = obj2 || {};  //给予初始值,变量0bj2 es6新写法
    for(var name in obj1){
        if(typeof obj1[name] === 'object') {
            obj2 = (obj1[name].constructor === Array) ? [] : {};
            deepcopy(obj1[name], obj2) //递归思想
        }else{
            obj2[name] = obj1[name];
        }
    }
    return obj2
};

//copy的第二种写法
// export const deepcopy = (source) => {
//     const targetObj = Array.isArray(source) ? [] : {};  //给予初始值,变量0bj2 es6新写法
//     for(var key in source){
//         if(source.hasOwnProperty(key)){
//             if(source[key] && typeof source[key] === 'object') {
//                 targetObj[key] = Array.isArray(source[key]) ? [] : {};//递归思想
//                 targetObj[key] = deepcopy(source[key]) ? [] : {};//递归思想
//             }else{
//                 targetObj[key] = source[key];
//             }
//         }
//     }
//     return targetObj
// };

export const generateAutoAction = (actions, proxyApi) => {
    let autoActionList = [], suffix = 'Api';
    for(let i in proxyApi){
        autoActionList.push(i.substr(0, i.length - suffix.length));
    }
    autoActionList.forEach(element => {
        actions[element + 'Action'] = ({commit}, payload) => {
            let ApiFunName = element + 'Api';
            let obj = {};
            for(let i in payload){
                if(i == 'cb'){
                    continue;
                }
                obj[i] = payload[i];
            }
            proxyApi[ApiFunName](obj).then((data) => {
                autoActionSuccessCb(data, payload.cb);
            }).catch((ret) => {
                autoActionFailCb(ret, payload.vm);
            })
        }
    })
};

export const autoActionSuccessCb = (data, cb) => {
    let result = null;
    if(data && data.data){
        result = data.data;
    }
    if(result){
        cb && cb(result);
    }
};

export const autoActionFailCb = (data, vm) => {
   console.log(data.message, '网络异常');
   vm.$Message.warning('处理异常');
};

