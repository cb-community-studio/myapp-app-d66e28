const assert = require('assert');
const app = require('../../src/app');

describe('\'Employee Surveys And Feedback\' service', () => {
  it('registered the service', () => {
    const service = app.service('Employee Surveys And Feedback');

    assert.ok(service, 'Registered the service (Employee Surveys And Feedback)');
  });
});
