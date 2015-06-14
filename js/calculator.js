
var Utils = require('./utils');

var _result = 0;

module.exports = {
	
	getResult: function() {
		return _result;
	},

	resetResult: function() {
		_result = 0;
	},

	calculate: function(s){
		var opArr = this.convertStringToArr(s);
		var num = [];
		var sign;
		this.resetResult();
		for(i in opArr) {
			if(isNaN(opArr[i])) {
				//sign
				var curNum = this.convertToNum(num);
				this.doArithmetic(curNum, sign);
				num = [];
				sign = opArr[i];
			} else {
				//number
				num.push(opArr[i]);
			}
		}
		if(num.length > 0) {
			var curNum = this.convertToNum(num);
			this.doArithmetic(curNum, sign);
		}
	},
	
	convertStringToArr: function(s) {
		return Utils.split(Utils.removeSpaces(s));
	},

	convertToNum: function(arr) {
		return parseInt(arr.join(''));
	},

	doArithmetic: function(num, sign) {
		switch(sign){
			case '+':
				_result += num;
				break;
			case '-':
				_result -= num;
				break;
			case '*':
				_result *= num;
				break;
			case '/':
				_result /= num;
				break;
			default: 
				_result = num;
				break;
		}
	}
	
};