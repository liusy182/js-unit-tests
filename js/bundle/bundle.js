(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{"./utils":3}],2:[function(require,module,exports){

var Calulator = require('./calculator');

module.exports = {
	
	calculate: function(s){
		return Calulator.calculate(s);
	},


};
},{"./calculator":1}],3:[function(require,module,exports){


module.exports = {
	removeSpaces: function(s) {
		return s.replace(/ /g, '');
	},

	split: function(s) {
		return s.split('');
	}
}
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvY2FsY3VsYXRvci5qcyIsImpzL2luZGV4LmpzIiwianMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcblxyXG52YXIgX3Jlc3VsdCA9IDA7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcclxuXHRnZXRSZXN1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIF9yZXN1bHQ7XHJcblx0fSxcclxuXHJcblx0cmVzZXRSZXN1bHQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0X3Jlc3VsdCA9IDA7XHJcblx0fSxcclxuXHJcblx0Y2FsY3VsYXRlOiBmdW5jdGlvbihzKXtcclxuXHRcdHZhciBvcEFyciA9IHRoaXMuY29udmVydFN0cmluZ1RvQXJyKHMpO1xyXG5cdFx0dmFyIG51bSA9IFtdO1xyXG5cdFx0dmFyIHNpZ247XHJcblx0XHR0aGlzLnJlc2V0UmVzdWx0KCk7XHJcblx0XHRmb3IoaSBpbiBvcEFycikge1xyXG5cdFx0XHRpZihpc05hTihvcEFycltpXSkpIHtcclxuXHRcdFx0XHQvL3NpZ25cclxuXHRcdFx0XHR2YXIgY3VyTnVtID0gdGhpcy5jb252ZXJ0VG9OdW0obnVtKTtcclxuXHRcdFx0XHR0aGlzLmRvQXJpdGhtZXRpYyhjdXJOdW0sIHNpZ24pO1xyXG5cdFx0XHRcdG51bSA9IFtdO1xyXG5cdFx0XHRcdHNpZ24gPSBvcEFycltpXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvL251bWJlclxyXG5cdFx0XHRcdG51bS5wdXNoKG9wQXJyW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYobnVtLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dmFyIGN1ck51bSA9IHRoaXMuY29udmVydFRvTnVtKG51bSk7XHJcblx0XHRcdHRoaXMuZG9Bcml0aG1ldGljKGN1ck51bSwgc2lnbik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRjb252ZXJ0U3RyaW5nVG9BcnI6IGZ1bmN0aW9uKHMpIHtcclxuXHRcdHJldHVybiBVdGlscy5zcGxpdChVdGlscy5yZW1vdmVTcGFjZXMocykpO1xyXG5cdH0sXHJcblxyXG5cdGNvbnZlcnRUb051bTogZnVuY3Rpb24oYXJyKSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQoYXJyLmpvaW4oJycpKTtcclxuXHR9LFxyXG5cclxuXHRkb0FyaXRobWV0aWM6IGZ1bmN0aW9uKG51bSwgc2lnbikge1xyXG5cdFx0c3dpdGNoKHNpZ24pe1xyXG5cdFx0XHRjYXNlICcrJzpcclxuXHRcdFx0XHRfcmVzdWx0ICs9IG51bTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnLSc6XHJcblx0XHRcdFx0X3Jlc3VsdCAtPSBudW07XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJyonOlxyXG5cdFx0XHRcdF9yZXN1bHQgKj0gbnVtO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICcvJzpcclxuXHRcdFx0XHRfcmVzdWx0IC89IG51bTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogXHJcblx0XHRcdFx0X3Jlc3VsdCA9IG51bTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn07IiwiXHJcbnZhciBDYWx1bGF0b3IgPSByZXF1aXJlKCcuL2NhbGN1bGF0b3InKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFxyXG5cdGNhbGN1bGF0ZTogZnVuY3Rpb24ocyl7XHJcblx0XHRyZXR1cm4gQ2FsdWxhdG9yLmNhbGN1bGF0ZShzKTtcclxuXHR9LFxyXG5cclxuXHJcbn07IiwiXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZW1vdmVTcGFjZXM6IGZ1bmN0aW9uKHMpIHtcclxuXHRcdHJldHVybiBzLnJlcGxhY2UoLyAvZywgJycpO1xyXG5cdH0sXHJcblxyXG5cdHNwbGl0OiBmdW5jdGlvbihzKSB7XHJcblx0XHRyZXR1cm4gcy5zcGxpdCgnJyk7XHJcblx0fVxyXG59Il19
