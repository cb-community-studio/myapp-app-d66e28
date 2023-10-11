const assert = require('assert');
const app = require('../../src/app');

describe('\'Training And Development\' service', () => {
  it('registered the service', () => {
    const service = app.service('Training And Development');

    assert.ok(service, 'Registered the service (Training And Development)');
  });
});
