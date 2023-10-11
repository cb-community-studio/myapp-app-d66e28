const { Recruitment And Onboarding } = require('./Recruitment And Onboarding.class');
const createModel = require('../../models/Recruitment And Onboarding.model');
const hooks = require('./Recruitment And Onboarding.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Recruitment And Onboarding', new Recruitment And Onboarding(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Recruitment And Onboarding');

  service.hooks(hooks);
};