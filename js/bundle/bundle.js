(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



module.exports = {
	
	calculate: function(s){
		var opArr = this.condense(s, this.split);
		var num = [];
		var sign;
		var result = 0;
		for(i in opArr) {
			if(isNaN(opArr[i])) {
				//sign
				var curNum = convertToNum(num);
				result = doArithmetic(result, curNum, sign);
				num = [];
				sign = opArr[i];
			} else {
				//number
				num.push(opArr[i]);
			}
		}
		return result;
	},
	
	convertToNum: function(arr) {
		return parseInt(arr.join(''));
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
},{}],2:[function(require,module,exports){

var Calulator = require('./calculator');

module.exports = {
	
	calculate: function(s){
		return Calulator.calculate(s);
	},


};
},{"./calculator":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvY2FsY3VsYXRvci5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XHJcblx0Y2FsY3VsYXRlOiBmdW5jdGlvbihzKXtcclxuXHRcdHZhciBvcEFyciA9IHRoaXMuY29uZGVuc2UocywgdGhpcy5zcGxpdCk7XHJcblx0XHR2YXIgbnVtID0gW107XHJcblx0XHR2YXIgc2lnbjtcclxuXHRcdHZhciByZXN1bHQgPSAwO1xyXG5cdFx0Zm9yKGkgaW4gb3BBcnIpIHtcclxuXHRcdFx0aWYoaXNOYU4ob3BBcnJbaV0pKSB7XHJcblx0XHRcdFx0Ly9zaWduXHJcblx0XHRcdFx0dmFyIGN1ck51bSA9IGNvbnZlcnRUb051bShudW0pO1xyXG5cdFx0XHRcdHJlc3VsdCA9IGRvQXJpdGhtZXRpYyhyZXN1bHQsIGN1ck51bSwgc2lnbik7XHJcblx0XHRcdFx0bnVtID0gW107XHJcblx0XHRcdFx0c2lnbiA9IG9wQXJyW2ldO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vbnVtYmVyXHJcblx0XHRcdFx0bnVtLnB1c2gob3BBcnJbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y29udmVydFRvTnVtOiBmdW5jdGlvbihhcnIpIHtcclxuXHRcdHJldHVybiBwYXJzZUludChhcnIuam9pbignJykpO1xyXG5cdH0sXHJcblxyXG5cdGRvQXJpdGhtZXRpYzogZnVuY3Rpb24ocHJldiwgY3VyLCBzaWduKSB7XHJcblx0XHR2YXIgcmVzdWx0O1xyXG5cdFx0c3dpdGNoKHNpZ24pe1xyXG5cdFx0XHRjYXNlICcrJzpcclxuXHRcdFx0XHRyZXN1bHQgPSBwcmUgKyBjdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJy0nOlxyXG5cdFx0XHRcdHJlc3VsdCA9IHByZSAtIGN1cjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnKic6XHJcblx0XHRcdFx0cmVzdWx0ID0gcHJlICogY3VyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICcvJzpcclxuXHRcdFx0XHRyZXN1bHQgPSBwcmUgLyBjdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IFxyXG5cdFx0XHRcdHJlc3VsdCA9IGN1cjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSxcclxuXHJcblx0Y29uZGVuc2U6IGZ1bmN0aW9uKHMsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gcy5yZXBsYWNlKC8gL2csICcnKTtcclxuXHRcdGlmKGNhbGxiYWNrKXtcclxuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKHJlc3VsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHNwbGl0OiBmdW5jdGlvbihzKXtcclxuXHRcdHJldHVybiBzLnNwbGl0KCcnKTtcclxuXHR9LFxyXG5cclxuXHJcblx0XHJcbn07IiwiXHJcbnZhciBDYWx1bGF0b3IgPSByZXF1aXJlKCcuL2NhbGN1bGF0b3InKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFxyXG5cdGNhbGN1bGF0ZTogZnVuY3Rpb24ocyl7XHJcblx0XHRyZXR1cm4gQ2FsdWxhdG9yLmNhbGN1bGF0ZShzKTtcclxuXHR9LFxyXG5cclxuXHJcbn07Il19
