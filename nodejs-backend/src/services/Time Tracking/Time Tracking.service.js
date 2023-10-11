const { Time Tracking } = require('./Time Tracking.class');
const createModel = require('../../models/Time Tracking.model');
const hooks = require('./Time Tracking.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Time Tracking', new Time Tracking(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Time Tracking');

  service.hooks(hooks);
};