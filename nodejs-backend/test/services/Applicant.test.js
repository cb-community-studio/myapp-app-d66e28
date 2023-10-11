const assert = require('assert');
const app = require('../../src/app');

describe('\'Applicant\' service', () => {
  it('registered the service', () => {
    const service = app.service('Applicant');

    assert.ok(service, 'Registered the service (Applicant)');
  });
});
