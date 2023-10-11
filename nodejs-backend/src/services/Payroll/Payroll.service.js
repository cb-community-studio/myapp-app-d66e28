const { Payroll } = require('./Payroll.class');
const createModel = require('../../models/Payroll.model');
const hooks = require('./Payroll.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Payroll', new Payroll(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Payroll');

  service.hooks(hooks);
};