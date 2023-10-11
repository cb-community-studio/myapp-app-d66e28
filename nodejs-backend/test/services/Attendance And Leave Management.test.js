const assert = require('assert');
const app = require('../../src/app');

describe('\'Attendance And Leave Management\' service', () => {
  it('registered the service', () => {
    const service = app.service('Attendance And Leave Management');

    assert.ok(service, 'Registered the service (Attendance And Leave Management)');
  });
});
