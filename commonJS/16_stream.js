//stream:1.有方向，2.数据
const fs = require('fs');
//数据源
const rs = fs.createReadStream('./16_stream.js');
//数据流向：控制台
rs.pipe( process.stdout );