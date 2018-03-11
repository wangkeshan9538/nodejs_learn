const url = require('url');

//解析url 获得url信息对象
var u=url.parse('https://www.imooc.com/video/6710/0')
console.log(u);

//url format
var url_str=url.format({
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'nodejs.org',
  port: null,
  hostname: 'nodejs.org',
  hash: '#url_url',
  search: null,
  query: null,
  pathname: '/dist/latest-v8.x/docs/api/url.html',
  path: '/dist/latest-v8.x/docs/api/url.html',
  href: 'https://nodejs.org/dist/latest-v8.x/docs/api/url.html#url_url' });
console.log(url_str);


 