 //回调
 function learn(something){
	 
	 console.log(something);
 }
 function we(callback,something){
	 something += 'is cool'
	 callback(something)
 }
 we(learn,'Nodejs')
 
//异步
var c=0
function print(){
	console.log(c)
}
function plus(callback){
	//定时
	setTimeout(function(){
		c+=1
		callback(c)
	},1000)
	
}
plus(print )
 