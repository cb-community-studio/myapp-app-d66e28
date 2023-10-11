const assert = require('assert');
const app = require('../../src/app');

describe('\'Hr Budgeting And Cost Tracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('Hr Budgeting And Cost Tracking');

    assert.ok(service, 'Registered the service (Hr Budgeting And Cost Tracking)');
  });
});
