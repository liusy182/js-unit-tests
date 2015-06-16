var $ = require('jquery');
var Calculator = require('./calculator');

module.exports = (function () {
 	$(document).ready(
 		$('button').click(function() {
 			Calculator.calculate($('#input').val());
 			var output = Calculator.getResult();
 			$('#output').val(output);
 		})
 	);
})();
