var http=require('http')

var url='http://www.imooc.com/learn/861'
var cheerio=require('cheerio')

function filterChapters(html){
	
	var $=cheerio.load(html)
	var chapters=$('.J-media-item')
	 
	 chapters.each(function(item,val){		
		console.log(val.children[2].data.trim())
	 })
}


http.get(url,function(res){
	var html=''
	
	res.on('data',function(data){
		html +=data
	})
	
	res.on('end',function(){
		filterChapters(html)
	})
}).on('error',function(){
	console.log('出错')
})