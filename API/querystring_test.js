const querystring = require('querystring');
var str=querystring.stringify({name:'scott',course:['jade','node'],from:''})
console.log(str);
//改变间隔，和=连接符
var str=querystring.stringify({name:'scott',course:['jade','node'],from:''},',',':')
var query_obj=querystring.parse('name=scott&course=jade');
console.log(query_obj);

var esca=querystring.escape('哈哈');
console.log(esca);