const { Hr Analytics And Reporting } = require('./Hr Analytics And Reporting.class');
const createModel = require('../../models/Hr Analytics And Reporting.model');
const hooks = require('./Hr Analytics And Reporting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Hr Analytics And Reporting', new Hr Analytics And Reporting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Hr Analytics And Reporting');

  service.hooks(hooks);
};