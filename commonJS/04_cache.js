//module被加载的时候执行
//加载后缓存
//存在循环加载，则只输出断点以前的部分，等再次回到断点后，继续执行剩余的部分
require('./01_common.js');
require('./01_common.js');