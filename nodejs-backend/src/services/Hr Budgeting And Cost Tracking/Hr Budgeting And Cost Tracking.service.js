const { Hr Budgeting And Cost Tracking } = require('./Hr Budgeting And Cost Tracking.class');
const createModel = require('../../models/Hr Budgeting And Cost Tracking.model');
const hooks = require('./Hr Budgeting And Cost Tracking.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Hr Budgeting And Cost Tracking', new Hr Budgeting And Cost Tracking(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Hr Budgeting And Cost Tracking');

  service.hooks(hooks);
};