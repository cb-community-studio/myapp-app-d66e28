const { Applicant } = require('./Applicant.class');
const createModel = require('../../models/Applicant.model');
const hooks = require('./Applicant.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Applicant', new Applicant(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Applicant');

  service.hooks(hooks);
};