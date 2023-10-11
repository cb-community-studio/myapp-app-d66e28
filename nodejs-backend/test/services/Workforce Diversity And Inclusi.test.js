const assert = require('assert');
const app = require('../../src/app');

describe('\'Workforce Diversity And Inclusi\' service', () => {
  it('registered the service', () => {
    const service = app.service('Workforce Diversity And Inclusi');

    assert.ok(service, 'Registered the service (Workforce Diversity And Inclusi)');
  });
});
