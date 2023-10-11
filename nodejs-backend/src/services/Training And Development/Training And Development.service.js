const { Training And Development } = require('./Training And Development.class');
const createModel = require('../../models/Training And Development.model');
const hooks = require('./Training And Development.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/Training And Development', new Training And Development(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('Training And Development');

  service.hooks(hooks);
};