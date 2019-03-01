//引用第三方模块
//检查内置→再检查node_modules→父层级，逐层向上
//nodejs在装载第三方插件的时候，会将相关依赖都装上
const chalk = require( 'chalk' );
console.log( chalk.red( 'This is red' ) );//在log里将内容打印为红色