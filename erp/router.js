<<<<<<< HEAD
//var detail = require('./detail');
//var personal = require('./personal/personal');
//var login = require('./login/login');
=======
<<<<<<< HEAD
var detail = require('./detail');
var personal = require('./personal/personal');
var login = require('./login/login');
var register = require('./register/register');
=======
// var detail = require('./detail');
// var personal = require('./personal/personal');
// var login = require('./login/login');
>>>>>>> b73e0f96bdf069880ecd732b63fc14efa2755d10
>>>>>>> 47d0ee7506ab19916aaf8cfe279db5efc7cf8aea

module.exports = function(app){
	app.all("*", function(req, res, next){
		res.header('Access-Control-Allow-Origin','*');

		if(req.method == "OPTIONS") {
            res.send(200);/*让options请求快速返回*/
        } else{
            next();
		}
		
<<<<<<< HEAD
//		detail(app);
//		personal(app);
//		login(app);
=======
<<<<<<< HEAD
		detail(app);
		personal(app);
		login(app);
		register(app);
=======
		// detail(app);
		// personal(app);
		// login(app);
>>>>>>> b73e0f96bdf069880ecd732b63fc14efa2755d10
>>>>>>> 47d0ee7506ab19916aaf8cfe279db5efc7cf8aea
	})
}