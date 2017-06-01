var mark = require('markdown-it');
var md = new mark();
var str = md.render('# 这是我的测试版本');
console.log(str);

module.exports = str;
