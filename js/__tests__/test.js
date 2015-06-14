

jest.dontMock('../calculator');

describe('test calculator', function() {

  var Calculator = require('../calculator');
  
  it('test condense', function() {
  	var result = Calculator.condense('1 + 2');
  	expect(result).toBe('1+2');
  });

  it('test condense with callback', function() {
  	var result = Calculator.condense('1 + 2', Calculator.split);
  	expect(result).toEqual(['1', '+', '2']);
  });

  it('test split', function() {
  	var result = Calculator.split('test');
  	expect(result).toEqual(['t', 'e', 's', 't']);
  });

});