const assert = require('assert');
const app = require('../../src/app');

describe('\'Employee Relations\' service', () => {
  it('registered the service', () => {
    const service = app.service('Employee Relations');

    assert.ok(service, 'Registered the service (Employee Relations)');
  });
});
