//作用域
var globalVariable='this is global variable'

function globalFunction(){
	var localVariable ='this is local variable'
	console.log('visit global/local variable')
	console.log(globalVariable)
	console.log(localVariable)
	
	globalVariable= 'this is changed variable'
	console.log(globalVariable)
	
	function localFunction(){
		var innerLocalVariable='this is inner local variable'
		console.log(globalVariable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}
	localFunction()
}
globalFunction()

//this 指向的是函数的拥有者，而不是函数本身
//但在构造方法中指代new出的对象
var pet ={
	words:'...',
	speak:function(){
		console.log(this.words)
		console.log(this ==pet)
	}
}
pet.speak() 

function fun(words){
	this.words=words;
	console.log(this.words)
	console.log(this ==global)
}
fun('...');

//
function fun2(){
	this.words='1'
	this.speak=function(){
		console.log(this.words)
		console.log(this)
	}
}
var f=new fun2('miao')
f.speak()