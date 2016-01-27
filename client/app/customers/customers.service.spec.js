'use strict';

describe('Service: customers', function () {

  // load the service's module
  beforeEach(module('cascadeddApp'));

  // instantiate service
  var customers;
  beforeEach(inject(function (_customers_) {
    customers = _customers_;
  }));

  it('should do something', function () {
    expect(!!customers).to.be.true;
  });

});
