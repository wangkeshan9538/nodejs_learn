var student = require('./student')
var techer = require('./techer')


function add(techerName,students){
	techer.add(techerName)
	students.forEach(function (item,index){
		student.add(item)
	})
}

exports.add=add
