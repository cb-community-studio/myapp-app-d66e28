const assert = require('assert');
const app = require('../../src/app');

describe('\'Compliance And Documents\' service', () => {
  it('registered the service', () => {
    const service = app.service('Compliance And Documents');

    assert.ok(service, 'Registered the service (Compliance And Documents)');
  });
});
