var fs=require('fs')

var myreadStream= fs.createReadStream(__dirname+'/readMe.txt')
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt')
myreadStream.setEncoding("utf8");


myreadStream.pipe(myWriteStream)



var data="";
myreadStream.on('data',function(chunk){
	data+=chunk;
	myWriteStream.write(chunk);
});
myreadStream.on('end',function(){
	console.log(data);
});