const { Benefits Administration } = require('./Benefits Administration.class');
const createModel = require('../../models/Benefits Administration.model');
const hooks = require('./Benefits Administration.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Benefits Administration', new Benefits Administration(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Benefits Administration');

  service.hooks(hooks);
};