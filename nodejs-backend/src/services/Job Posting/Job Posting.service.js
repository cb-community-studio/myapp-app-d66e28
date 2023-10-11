const { Job Posting } = require('./Job Posting.class');
const createModel = require('../../models/Job Posting.model');
const hooks = require('./Job Posting.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Job Posting', new Job Posting(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Job Posting');

  service.hooks(hooks);
};