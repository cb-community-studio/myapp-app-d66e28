const { Benefits Open Enrollment } = require('./Benefits Open Enrollment.class');
const createModel = require('../../models/Benefits Open Enrollment.model');
const hooks = require('./Benefits Open Enrollment.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Benefits Open Enrollment', new Benefits Open Enrollment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Benefits Open Enrollment');

  service.hooks(hooks);
};