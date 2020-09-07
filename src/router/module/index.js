const files = require.context('.', true, /\.js$/); //引入当前目录下所有的js文件
let configRouters = [];

files.keys().forEach(key => {
    if(key === './index.js') return; //除去index.js文件
    configRouters = configRouters.concat(files(key).default);
});
 export default configRouters;
