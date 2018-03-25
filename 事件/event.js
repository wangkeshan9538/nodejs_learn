var events=require('events');
var util=require('util');

var person=function(name){
	this.name=name
}
util.inherits(person,events.EventEmitter)

var xiaoming=new person('xiaoming');
var xiaomi =new person('xiaomi');
var xia =new person('xia');

var array=[xiaoming,xiaomi,xia]

array.forEach(function(p){
	p.on('speak',function(message){
		console.log(p.name+"message"+message);
	})
});
xiaoming.emit('speak','im xiaoming')
//var myemitter=new events.EventEmitter();
//
//myemitter.on('someEvent', function(message){
//	console.log(message);
//})
//myemitter.emit('someEvent','the event was emitted');


/**
	on 是绑定事件，
	emit是 触发事件
*/