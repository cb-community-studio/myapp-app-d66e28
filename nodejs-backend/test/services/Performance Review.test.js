const assert = require('assert');
const app = require('../../src/app');

describe('\'Performance Review\' service', () => {
  it('registered the service', () => {
    const service = app.service('Performance Review');

    assert.ok(service, 'Registered the service (Performance Review)');
  });
});
