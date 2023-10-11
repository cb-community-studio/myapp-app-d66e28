const { Performance Review } = require('./Performance Review.class');
const createModel = require('../../models/Performance Review.model');
const hooks = require('./Performance Review.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Performance Review', new Performance Review(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Performance Review');

  service.hooks(hooks);
};