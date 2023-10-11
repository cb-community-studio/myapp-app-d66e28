const assert = require('assert');
const app = require('../../src/app');

describe('\'Benefits Administration\' service', () => {
  it('registered the service', () => {
    const service = app.service('Benefits Administration');

    assert.ok(service, 'Registered the service (Benefits Administration)');
  });
});
