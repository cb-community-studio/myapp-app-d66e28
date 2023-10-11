const { Employee Surveys And Feedback } = require('./Employee Surveys And Feedback.class');
const createModel = require('../../models/Employee Surveys And Feedback.model');
const hooks = require('./Employee Surveys And Feedback.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Employee Surveys And Feedback', new Employee Surveys And Feedback(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Employee Surveys And Feedback');

  service.hooks(hooks);
};