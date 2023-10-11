const assert = require('assert');
const app = require('../../src/app');

describe('\'Time Tracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('Time Tracking');

    assert.ok(service, 'Registered the service (Time Tracking)');
  });
});
