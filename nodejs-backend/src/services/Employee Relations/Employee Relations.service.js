const { Employee Relations } = require('./Employee Relations.class');
const createModel = require('../../models/Employee Relations.model');
const hooks = require('./Employee Relations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Employee Relations', new Employee Relations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Employee Relations');

  service.hooks(hooks);
};