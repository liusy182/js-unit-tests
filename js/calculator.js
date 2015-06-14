


module.exports = {
	
	calculate: function(s){
		var opArr = this.condense(s, this.split);
		var num = [];
		var sign = '';
		var result = 0;
		for(int i in opArr) {
			if(isNaN(opArr[i]) {
				//sign
				if(num.length === 0) {
					sign = opArr[i];
				} else {
					var curNum = convertToNum(num);
					result = doArithmetic(result, curNum, sign);
					num = [];
					sign = opArr[i];
				}
			} else {
				//number
				num.push(opArr[i]);
			}
		}
		return result;
	},
	
	convertToNum: function(arr) {

	},

	doArithmetic: function(prev, cur, sign) {
		var result;
		switch(sign){
			case '+':
				result = pre + cur;
				break;
			case '-':
				result = pre - cur;
				break;
			case '*':
				result = pre * cur;
				break;
			case '/':
				result = pre / cur;
				break;
			default: 
				result = cur;
				break;
		}
		return result;
	},

	condense: function(s, callback) {
		var result = s.replace(/ /g, '');
		if(callback){
			return callback(result);
		} else {
			return result;
		}
	},

	split: function(s){
		return s.split('');
	},


	
};