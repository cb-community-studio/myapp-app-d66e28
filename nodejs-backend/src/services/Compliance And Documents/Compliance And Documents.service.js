const { Compliance And Documents } = require('./Compliance And Documents.class');
const createModel = require('../../models/Compliance And Documents.model');
const hooks = require('./Compliance And Documents.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Compliance And Documents', new Compliance And Documents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Compliance And Documents');

  service.hooks(hooks);
};