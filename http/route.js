var handler = require('./handler');

var handleController={};

handleController['/'] = handler.home;
handleController['/home']=handler.home;
handleController['/review']=handler.review;
handleController['/404']=handler.page404;


function route(pathname,request,response) {
	if(typeof handleController[pathname] ==='function' ){
		handleController[pathname](request,response);
	}else{
		handleController['/404'](request,response);
	}
}

module.exports={
	router:route
}
