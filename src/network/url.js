let useMock = false, baseUrl = '/brop-pop/';
let ENV = 'dev';
if(ENV === 'dev'){ //ENV是在webpack配置是定义的全局属性，主要是指dev或者是prod环境
    if(useMock){
        baseUrl = '/mockData/'
    }else{
        baseUrl = '/'
    }
}

let prefix = 'product/brop/pop/fsm/';

prefix = baseUrl + prefix;

const suffix = '';

const list = {
    queryPrdList:      `${prefix}getProduct/list${suffix}`,
    queryPrdListInfo:  `${prefix}getProduct/detailInfo${suffix}`
};

module.exports = list;
