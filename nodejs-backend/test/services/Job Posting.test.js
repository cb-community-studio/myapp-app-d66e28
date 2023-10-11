const assert = require('assert');
const app = require('../../src/app');

describe('\'Job Posting\' service', () => {
  it('registered the service', () => {
    const service = app.service('Job Posting');

    assert.ok(service, 'Registered the service (Job Posting)');
  });
});
