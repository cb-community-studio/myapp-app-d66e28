const assert = require('assert');
const app = require('../../src/app');

describe('\'Succession Planning\' service', () => {
  it('registered the service', () => {
    const service = app.service('Succession Planning');

    assert.ok(service, 'Registered the service (Succession Planning)');
  });
});
