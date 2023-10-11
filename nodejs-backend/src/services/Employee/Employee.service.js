const { Employee } = require('./Employee.class');
const createModel = require('../../models/Employee.model');
const hooks = require('./Employee.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Employee', new Employee(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Employee');

  service.hooks(hooks);
};