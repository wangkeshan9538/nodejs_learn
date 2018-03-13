var pet ={
	words:'...',
	speak:function(say){
		console.log(say+' '+this.words)
	}
}
pet.speak('speak')

var dog={
	words:'wang'
}

//call 改变执行上下文 可以改变speak中的 this ， 

//本来speak中this指向pet,但是通过call,指向dog
pet.speak.call(dog,'speak')


//
function pet2(words){
	this.words=words
	this.speak=function(){
		console.log(this.words)
	}
}

function dog2(words){
	console.log(this==global)
	pet2.call(this,words)
}
dog2()
var d=new dog2('wang')
d.speak()