const { Offboarding Termination } = require('./Offboarding Termination.class');
const createModel = require('../../models/Offboarding Termination.model');
const hooks = require('./Offboarding Termination.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Offboarding Termination', new Offboarding Termination(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Offboarding Termination');

  service.hooks(hooks);
};