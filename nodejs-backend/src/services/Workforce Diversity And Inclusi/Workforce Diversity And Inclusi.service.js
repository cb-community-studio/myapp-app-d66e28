const { Workforce Diversity And Inclusi } = require('./Workforce Diversity And Inclusi.class');
const createModel = require('../../models/Workforce Diversity And Inclusi.model');
const hooks = require('./Workforce Diversity And Inclusi.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Workforce Diversity And Inclusi', new Workforce Diversity And Inclusi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Workforce Diversity And Inclusi');

  service.hooks(hooks);
};