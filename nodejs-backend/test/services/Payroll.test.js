const assert = require('assert');
const app = require('../../src/app');

describe('\'Payroll\' service', () => {
  it('registered the service', () => {
    const service = app.service('Payroll');

    assert.ok(service, 'Registered the service (Payroll)');
  });
});
