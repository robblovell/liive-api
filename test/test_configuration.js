// Generated by CoffeeScript 1.10.0
(function() {
  var assert, should;

  should = require('should');

  assert = require('assert');

  describe('Configuration', function() {
    it('configures the application correctly.', function(done) {
      var config;
      config = require('../config/configuration');
      config.env.should.be.equal('local');
      return done();
    });
    return it('test fails', function(done) {
      var config;
      config = require('../config/configuration');
      config.env.should.be.equal('false');
      return done();
    });
  });

}).call(this);

//# sourceMappingURL=test_configuration.js.map
