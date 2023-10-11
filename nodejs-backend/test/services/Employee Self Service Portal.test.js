const assert = require('assert');
const app = require('../../src/app');

describe('\'Employee Self Service Portal\' service', () => {
  it('registered the service', () => {
    const service = app.service('Employee Self Service Portal');

    assert.ok(service, 'Registered the service (Employee Self Service Portal)');
  });
});
