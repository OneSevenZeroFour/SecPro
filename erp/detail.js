
module.exports = function(app){
	app.get('/detail',function(req,res){
		console.log(req.query)
		res.send('hello, world');
	})
}