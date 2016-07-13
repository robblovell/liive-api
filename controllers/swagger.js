// Generated by CoffeeScript 1.10.0
(function() {
  var _;

  _ = require('lodash');

  module.exports = function(app, resources, spec, config) {
    var definitions, paths, specification;
    if (spec == null) {
      spec = '/spec';
    }
    paths = {};
    definitions = {};
    _.each(resources, function(resource) {
      var i, len, path, ref, swagger;
      swagger = resource.swagger();
      ref = swagger.paths;
      for (i = 0, len = ref.length; i < len; i++) {
        path = ref[i];
        if ((path != null)) {
          path.get.parameters.push({
            name: 'query',
            "in": 'query',
            description: 'Query by example. Pass a JSON object to find, for example: {"age": {"$gte": 21, "$lte": 65}.',
            type: 'string',
            required: false,
            "default": ''
          });
        }
      }
      paths = _.assign(paths, swagger.paths);
      return definitions = _.assign(definitions, swagger.definitions);
    });
    specification = {
      swagger: '2.0',
      info: {
        description: 'LiiveVideo API',
        version: config.version,
        title: 'API for live video portal',
        contact: {
          name: 'Robb Lovell'
        }
      },
      host: config.host,
      basePath: config.basepath,
      schemes: [config.scheme],
      definitions: definitions,
      paths: paths
    };
    return app.get(spec, function(req, res, next) {
      return res.json(specification);
    });
  };

}).call(this);

//# sourceMappingURL=swagger.js.map