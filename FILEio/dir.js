var fs =require('fs')


//fs.mkdirSync("stuff");
//fs.rmdirSync("stuff");

//复制
fs.mkdir("stuff",function(){
	fs.readFile("readMe.txt","utf8",function(err,data){
		fs.writeFile("./stuff/writMe.txt",data,function(){
			console.log("copy successFully");
		});
	});
});

//fs.unlink("writeMe.txt",function(){
//	console.log("delete write.txt")
//})