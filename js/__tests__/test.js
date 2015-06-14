

jest.dontMock('../calculator');
jest.dontMock('../utils');

describe('calculator', function() {

  var Calculator;
  var Utils;
  
  beforeEach(function() {
     Calculator = require('../calculator');
     Utils = require('../utils');
  });

  it('', function() {

    var result = Calculator.convertToNum(['1', '2', '3']);
    expect(result).toEqual(123);
  });
  
  it('', function() {
    jest.mock('../utils');
    Utils.removeSpaces = jest.genMockFn();
    Utils.split = jest.genMockFn();
    Calculator.convertStringToArr("12 + 13");
    expect(Utils.removeSpaces).toBeCalled();
    expect(Utils.split).toBeCalled();
    jest.dontMock('../utils');
  });

  it('', function() {
    Calculator.calculate('1 + 2');
    var result = Calculator.getResult();
    expect(result).toEqual(3);
  });

});