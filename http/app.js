var startserver = require('./httpserver');
//导入的变量名是可以随便起的
var routerz = require('./route');

startserver.startserver(routerz.router);