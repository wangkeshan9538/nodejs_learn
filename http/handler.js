var fs = require('fs');
var url = require('url')
var test = 1;

function home(request, response) {
	var data = ""
 	if(request.method === 'POST') {
		request.on('data', function(chunk) {
			console.log(request.complete);
			data += chunk;
			//console.log(request);
			console.log(request.method);
			var myreadStream = fs.createReadStream(__dirname + '/home.html', 'utf8');
			myreadStream.pipe(response);
			console.log("read stream end");
		});
		request.on('end', function() {
			console.log(request.complete);
			console.log(test);
		});
	} else if(request.method === 'GET') {
		var param = url.parse(request.url).query;
		console.log(param);
		response.end();
	}
}

function review(request, response) {
	console.log("in review");
	var myreadStream = fs.createReadStream(__dirname + '/review.html', 'utf8');
	myreadStream.pipe(response);
}

function page404(request, response) {
	console.log("404");
	var myreadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
	myreadStream.pipe(response);

}
//response.end();pipe会自动关闭
module.exports = {
	home: home,
	review: review,
	page404: page404
}

/**
 * 一个问题 给incomingMessage对象绑定data事件 是在 server requestListener 的事件里面去做的，
 * 那这个listen的事件执行的 时候，应该request已经成型了，，那么再绑定data方法是否还有用，
 * 猜测是这么一个过程，从接受http之后，触发listener, 至于request的data事件，在后面触发，所以在这里绑定是可以的，
 * 但是在listener的方法中都可以直接操作response来进行返回，怎么request的data还在后面 
 * 
 * */

/**
 * 我的代码，更多的是在绑定事件，按照成勋的执行顺序，事件的执行时间并不是直接执行，可能在绑了事件之后很久才执行，
 * 那为什么事件还能调用，绑定事件的模块的var，这是不太舒服的一点
 * */