var fs=require('fs');

//同步
//var  readMe=fs.readFileSync('readMe.txt','utf8');

//异步
var readMe=fs.readFile("readMe.txt",'utf8',(err,data) =>{
	if(err) throw err;
	console.log(data);
});
 
fs.writeFileSync("writeMe.txt",readMe);

console.log(readMe);

console.log("finished");