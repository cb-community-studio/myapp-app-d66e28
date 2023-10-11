const assert = require('assert');
const app = require('../../src/app');

describe('\'Offboarding Termination\' service', () => {
  it('registered the service', () => {
    const service = app.service('Offboarding Termination');

    assert.ok(service, 'Registered the service (Offboarding Termination)');
  });
});
