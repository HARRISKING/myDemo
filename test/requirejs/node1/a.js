var a = 12306;
console.log(a);

var fn = require('./b.js');
fn.wtf('harrisking');

var markdown = require('markdown-it');
mk = new markdown();
var str = mk.render('# 这是我的测试');
console.log(str);
