

jest.dontMock('../index');

describe('test', function() {

  var Index = require('../index');
  
  it('test plus', function() {
  	var result = Index.plus(1,2);
  	expect(result).toBe(3);
  });


});