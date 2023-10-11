const { Attendance And Leave Management } = require('./Attendance And Leave Management.class');
const createModel = require('../../models/Attendance And Leave Management.model');
const hooks = require('./Attendance And Leave Management.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Attendance And Leave Management', new Attendance And Leave Management(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Attendance And Leave Management');

  service.hooks(hooks);
};