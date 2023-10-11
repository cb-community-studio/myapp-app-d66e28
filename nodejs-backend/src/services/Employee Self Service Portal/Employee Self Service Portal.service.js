const { Employee Self Service Portal } = require('./Employee Self Service Portal.class');
const createModel = require('../../models/Employee Self Service Portal.model');
const hooks = require('./Employee Self Service Portal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Employee Self Service Portal', new Employee Self Service Portal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Employee Self Service Portal');

  service.hooks(hooks);
};