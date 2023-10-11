const assert = require('assert');
const app = require('../../src/app');

describe('\'Benefits Open Enrollment\' service', () => {
  it('registered the service', () => {
    const service = app.service('Benefits Open Enrollment');

    assert.ok(service, 'Registered the service (Benefits Open Enrollment)');
  });
});
