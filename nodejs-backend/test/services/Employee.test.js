const assert = require('assert');
const app = require('../../src/app');

describe('\'Employee\' service', () => {
  it('registered the service', () => {
    const service = app.service('Employee');

    assert.ok(service, 'Registered the service (Employee)');
  });
});
