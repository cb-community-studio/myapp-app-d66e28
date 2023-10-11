const { Succession Planning } = require('./Succession Planning.class');
const createModel = require('../../models/Succession Planning.model');
const hooks = require('./Succession Planning.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Succession Planning', new Succession Planning(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Succession Planning');

  service.hooks(hooks);
};