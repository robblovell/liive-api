// Generated by CoffeeScript 1.10.0
(function() {
  var Resource, mongoose;

  mongoose = require('mongoose');

  Resource = require('resourcejs');

  module.exports = function(app, model, name) {
    var resource;
    resource = Resource(app, '', name, model).patch({
      before: function(req, res, next) {
        var result, traverse;
        traverse = require('helpers/traverse');
        if (!((req.body != null) && (req.body[0] != null) && (req.body[0].op != null))) {
          result = traverse(req.body[0], '', []);
          req.body[0] = result[0];
        }
        return next();
      }
    }).get().put().post()["delete"]().index({
      before: function(req, res, next) {
        if ((req.query.query != null)) {
          req.modelQuery = this.model.find(JSON.parse(req.query.query));
          req.query.query = null;
        }
        next();
      }
    });
    return resource;
  };

}).call(this);

//# sourceMappingURL=account.js.map