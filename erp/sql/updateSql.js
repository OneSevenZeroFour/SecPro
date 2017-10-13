var connection = require('./sqlConnect')();
var Aresult = require('../base/base');
var merge = require('merge');

module.exports = function (cObj) {
	var obj = {
		sqlname: '',
		data: {},
		target: {},
		callback: function(){}
	}
	var res = merge(obj,cObj);

	var sql = `update ${res.sqlname} set`;

	if (Object.prototype.toString.call(res.data) === '[object Object]') {
		if (Object.prototype.toString.call(res.target) === '[object Object]') {
			for (var item in res.data) {
				sql += ` ${res.item}='${res.data[item]}'`;
			}
			sql += ` where`;
			for(var item in res.target){
				sql += ` ${item}='${res.target[item]}'`
			}

			connection.query(sql, function (err, result, fields) {
				if (err) {
					res.callback(Aresult(err));
					return;
				} else {
					res.callback(Aresult('success', true, result));
					return;
				}
			})
		} else {
			res.callback(Aresult('target不是一个对象'));
			return;
		}
	} else {
		res.callback(Aresult('data不是一个对象'));
		return;
	}
}